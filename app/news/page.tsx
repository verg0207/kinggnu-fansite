import { news } from "@/lib/news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">NEWS</p>
      <h1 className="font-display text-5xl md:text-6xl mb-6">新闻</h1>
      <p className="text-paper/80 mb-10">
        本页汇总公开新闻摘要与官方原文链接。粉丝站不发布原始一手情报，请以官方渠道为准。
      </p>
      <div className="space-y-6">
        {news.map((n) => (
          <article
            key={n.slug}
            className="border border-white/10 p-6 hover:border-accent transition"
          >
            <div className="text-xs text-muted tracking-widest">
              {n.date} · {n.source}
            </div>
            <h2 className="text-xl font-semibold mt-2">{n.title}</h2>
            <p className="text-paper/70 text-sm mt-2">{n.excerpt}</p>
            <Link
              href={n.url}
              target="_blank"
              className="inline-block mt-4 text-accent text-sm hover:underline"
            >
              阅读原文 →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
