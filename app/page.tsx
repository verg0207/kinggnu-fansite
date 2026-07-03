import Link from "next/link";

const sections = [
  {
    href: "/updates",
    title: "LIVE FEED",
    subtitle: "最新动态",
    desc: "YouTube / X / Instagram / Facebook 官方实时聚合"
  },
  {
    href: "/music",
    title: "LISTEN",
    subtitle: "听歌",
    desc: "官方 YouTube / Spotify 精选歌单直通"
  },
  {
    href: "/news",
    title: "NEWS",
    subtitle: "新闻",
    desc: "最新动态、演出预告、媒体资讯"
  },
  {
    href: "/tickets",
    title: "TICKETS",
    subtitle: "购票",
    desc: "官方演出票务导航与巡演信息"
  },
  {
    href: "/merch",
    title: "MERCH",
    subtitle: "周边",
    desc: "官方 Store 与限量周边资讯"
  },
  {
    href: "/community",
    title: "COMMUNITY",
    subtitle: "社区",
    desc: "粉丝讨论、评论、聚会与二创"
  },
  {
    href: "/about",
    title: "BAND",
    subtitle: "乐队",
    desc: "成员、编年史、作品脉络"
  }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-24">
          <p className="text-accent tracking-[0.4em] text-xs mb-4">
            NON-OFFICIAL FAN HUB
          </p>
          <h1 className="font-display text-6xl md:text-8xl leading-none">
            KING GNU
            <br />
            <span className="text-accent">HUB.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            混合摇滚、爵士、古典与流行的东京四人乐队 King Gnu
            粉丝聚合站。一处入口，抵达全部关于他们的内容。
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/music"
              className="bg-accent text-paper px-6 py-3 font-semibold hover:bg-paper hover:text-ink transition"
            >
              开始听歌 →
            </Link>
            <Link
              href="/about"
              className="border border-white/30 px-6 py-3 hover:border-accent hover:text-accent transition"
            >
              认识乐队
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24 grid gap-4 md:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group border border-white/10 hover:border-accent p-6 transition"
          >
            <div className="font-display text-3xl group-hover:text-accent">
              {s.title}
            </div>
            <div className="text-xs text-muted mt-1 tracking-widest">
              {s.subtitle.toUpperCase()}
            </div>
            <p className="mt-4 text-sm text-paper/80">{s.desc}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
