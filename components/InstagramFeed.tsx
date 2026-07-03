"use client";
import { social } from "@/lib/social";

// Instagram 官方 embed 需 access token 才能返回内嵌 HTML；
// 无 token 时使用图片墙：跳转到官方账号，配合 profile-only 卡片。
// 若需真实动态，参见 README「Instagram 高级方案」。
export default function InstagramFeed() {
  return (
    <div className="border border-white/10 p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-yellow-400" />
        <div>
          <div className="font-semibold">@{social.instagram.handle}</div>
          <div className="text-xs text-muted">Instagram Official</div>
        </div>
      </div>
      <p className="text-sm text-paper/70">
        由于 Instagram 官方不再支持免鉴权嵌入 profile
        动态，这里跳转到官方账号查看最新照片、Reels 与 Story 精选。
      </p>
      <a
        className="bg-accent text-paper text-center px-4 py-2 hover:bg-paper hover:text-ink transition"
        href={social.instagram.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        在 Instagram 打开 →
      </a>
    </div>
  );
}
