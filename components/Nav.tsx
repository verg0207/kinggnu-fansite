"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "首页" },
  { href: "/about", label: "乐队" },
  { href: "/updates", label: "动态" },
  { href: "/music", label: "听歌" },
  { href: "/news", label: "新闻" },
  { href: "/tickets", label: "购票" },
  { href: "/merch", label: "周边" },
  { href: "/community", label: "社区" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-widest">
          KING&nbsp;GNU<span className="text-accent">.</span>HUB
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-accent transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
