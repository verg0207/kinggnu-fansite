#!/usr/bin/env python3
"""
King Gnu Hub — 本地一键预览 PWA App

用法：
  python3 serve.py         # 默认端口 8080
  python3 serve.py 3000    # 自定义端口

打开后访问：  http://localhost:8080/app-preview.html

为什么要跑 HTTP：Service Worker、manifest、"安装到桌面" 等 PWA 能力
必须在 http:// 或 https:// 下才能启用；直接 file:// 打开会退化为纯浏览。
"""
import http.server, socketserver, os, sys, webbrowser

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".webmanifest": "application/manifest+json",
        ".svg": "image/svg+xml",
        ".js": "application/javascript",
    }
    def end_headers(self):
        # 关掉缓存，方便迭代
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

with socketserver.TCPServer(("", port), Handler) as httpd:
    url = f"http://localhost:{port}/app-preview.html"
    print(f"→ King Gnu Hub App is live at  {url}")
    print("→ Press Ctrl+C to stop.")
    try:
        webbrowser.open(url)
    except Exception:
        pass
    httpd.serve_forever()
