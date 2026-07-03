"use client";
import { useEffect, useRef } from "react";

// Giscus 评论：需要在 https://giscus.app 生成配置后填入
const REPO = "your-github-name/kinggnu-fansite";
const REPO_ID = "REPLACE_ME";
const CATEGORY = "General";
const CATEGORY_ID = "REPLACE_ME";

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || ref.current.childElementCount > 0) return;
    const s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.setAttribute("data-repo", REPO);
    s.setAttribute("data-repo-id", REPO_ID);
    s.setAttribute("data-category", CATEGORY);
    s.setAttribute("data-category-id", CATEGORY_ID);
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-strict", "0");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-theme", "dark");
    s.setAttribute("data-lang", "zh-CN");
    ref.current.appendChild(s);
  }, []);
  return <div ref={ref} />;
}
