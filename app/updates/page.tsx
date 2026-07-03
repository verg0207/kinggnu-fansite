import Link from "next/link";
import { fetchYouTubeRSS } from "@/lib/youtube";
import { social } from "@/lib/social";
import { news } from "@/lib/news";
import TwitterTimeline from "@/components/TwitterTimeline";
import InstagramFeed from "@/components/InstagramFeed";
import FacebookPage from "@/components/FacebookPage";

export const revalidate = 900; // 每 15 分钟重新构建，保持"实时"感

function timeAgo(iso: string) {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.round(diff / 60000);
  if (m < 60) return `${m} 分钟前`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} 小时前`;
  const d = Math.round(h / 24);
  if (d < 30) return `${d} 天前`;
  return new Date(iso).toISOString().slice(0, 10);
}

export default async function UpdatesPage() {
  const videos = await fetchYouTubeRSS();
  const latest = videos[0];

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">LIVE FEED</p>
      <h1 className="font-display text-5xl md:text-6xl mb-4">最新动态</h1>
      <p className="text-paper/80 max-w-3xl">
        聚合 King Gnu 官方 YouTube、X (Twitter)、Instagram、Facebook、TikTok
        的最新公开发布。视频列表通过 YouTube 频道 RSS 每 15
        分钟自动刷新，社交时间线由各平台官方 widget 实时渲染。
      </p>

      {/* 官方入口 */}
      <div className="mt-8 flex flex-wrap gap-3">
        {(
          [
            ["YouTube", social.youtube.url],
            ["X / Twitter", social.twitter.url],
            ["Instagram", social.instagram.url],
            ["Facebook", social.facebook.url],
            ["TikTok", social.tiktok.url]
          ] as const
        ).map(([label, url]) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-white/20 hover:border-accent hover:text-accent px-4 py-2 text-sm"
          >
            {label} →
          </a>
        ))}
      </div>

      {/* 最新一条视频（大卡） */}
      {latest && (
        <section className="mt-12">
          <h2 className="font-display text-3xl mb-4">最新视频</h2>
          <div className="grid md:grid-cols-5 gap-6 border border-white/10">
            <div className="md:col-span-3 aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${latest.id}`}
                title={latest.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="md:col-span-2 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs text-accent tracking-widest">
                  YOUTUBE · {timeAgo(latest.publishedAt)}
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-snug">
                  {latest.title}
                </h3>
              </div>
              <a
                href={latest.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 text-accent text-sm hover:underline"
              >
                在 YouTube 打开 →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* YouTube 近期列表 */}
      {videos.length > 1 && (
        <section className="mt-12">
          <h2 className="font-display text-3xl mb-4">
            YouTube 近期上传
            <span className="text-xs text-muted ml-3">
              via channel RSS · 每 15 分钟自动刷新
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {videos.slice(1).map((v) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-white/10 hover:border-accent block group"
              >
                <div className="aspect-video overflow-hidden bg-black/40">
                  {v.thumbnail && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  )}
                </div>
                <div className="p-3">
                  <div className="text-xs text-muted">
                    {timeAgo(v.publishedAt)}
                  </div>
                  <div className="text-sm mt-1 line-clamp-2">{v.title}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 若 RSS 抓取为空，兜底提示 */}
      {videos.length === 0 && (
        <section className="mt-12 border border-white/10 p-6 text-sm text-muted">
          暂时无法从 YouTube 频道 RSS 获取动态（可能是网络或频道设置问题）。
          请直接访问{" "}
          <a
            className="text-accent hover:underline"
            href={social.youtube.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            官方 YouTube 频道
          </a>
          。
        </section>
      )}

      {/* 社交时间线 */}
      <section className="mt-16 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-3xl mb-4">
            X (Twitter){" "}
            <span className="text-xs text-muted ml-2">
              @{social.twitter.handle}
            </span>
          </h2>
          <div className="border border-white/10 p-4 bg-white/5">
            <TwitterTimeline />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-3xl mb-4">
              Instagram{" "}
              <span className="text-xs text-muted ml-2">
                @{social.instagram.handle}
              </span>
            </h2>
            <InstagramFeed />
          </div>
          <div>
            <h2 className="font-display text-3xl mb-4">Facebook</h2>
            <div className="border border-white/10 p-4 flex justify-center">
              <FacebookPage />
            </div>
          </div>
        </div>
      </section>

      {/* 官方新闻摘要（本站编辑） */}
      <section className="mt-16">
        <h2 className="font-display text-3xl mb-4">
          官方发布摘要
          <span className="text-xs text-muted ml-3">编辑维护 · 附出处</span>
        </h2>
        <div className="space-y-3">
          {news.slice(0, 5).map((n) => (
            <a
              key={n.slug}
              href={n.url}
              target="_blank"
              rel="noreferrer noopener"
              className="block border border-white/10 hover:border-accent p-4 transition"
            >
              <div className="text-xs text-muted">
                {n.date} · {n.source}
              </div>
              <div className="font-semibold mt-1">{n.title}</div>
            </a>
          ))}
        </div>
        <Link
          href="/news"
          className="inline-block mt-6 text-accent text-sm hover:underline"
        >
          查看完整新闻列表 →
        </Link>
      </section>
    </div>
  );
}
