import { albums, videos, singles } from "@/lib/music";

export default function MusicPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">LISTEN</p>
      <h1 className="font-display text-5xl md:text-6xl mb-6">听歌</h1>
      <p className="text-paper/80 max-w-2xl">
        所有音频与视频均通过官方 YouTube / Spotify
        嵌入播放，收益归属原始权利人。请确保在支持流媒体的地区/账号下使用。
      </p>

      <h2 className="font-display text-3xl mt-14 mb-6">最新单曲</h2>
      <div className="border border-white/10 divide-y divide-white/10">
        {singles.map((s) => (
          <div
            key={s.title}
            className="p-4 flex items-center justify-between"
          >
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm text-muted">{s.date}</div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl mt-14 mb-6">MV 精选</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((v) => (
          <div key={v.id} className="border border-white/10">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm">
              <div className="font-semibold">
                {v.title}{" "}
                <span className="text-muted font-normal">· {v.year}</span>
              </div>
              {v.tieIn && (
                <div className="text-xs text-accent mt-1">{v.tieIn}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl mt-14 mb-6">专辑 / Spotify</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {albums.map((a) => (
          <div key={a.title} className="border border-white/10">
            <iframe
              style={{ borderRadius: 0 }}
              src={`https://open.spotify.com/embed/album/${a.spotify}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <div className="p-4">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-muted">
                {a.year}
                {a.note ? ` · ${a.note}` : ""}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl mt-14 mb-6">Apple Music</h2>
      <p className="text-paper/70 text-sm mb-4">
        Apple Music 用户可以直接跳转官方艺人页收听全部作品。
      </p>
      <a
        href="https://music.apple.com/jp/artist/king-gnu/1140746713"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-block border border-white/30 hover:border-accent hover:text-accent px-6 py-3"
      >
        在 Apple Music 打开 →
      </a>
    </div>
  );
}
