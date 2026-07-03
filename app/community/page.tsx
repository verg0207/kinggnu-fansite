import Giscus from "@/components/Giscus";

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="text-accent text-xs tracking-[0.4em] mb-2">COMMUNITY</p>
      <h1 className="font-display text-5xl md:text-6xl mb-6">社区</h1>
      <p className="text-paper/80 mb-8">
        通过 GitHub 登录发表评论、参与讨论，也可以直接前往 Discord
        与其他粉丝实时聊天。请遵守社区规则，禁止盗版分享与人身攻击。
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <a
          className="border border-white/10 hover:border-accent p-6 block"
          href="https://discord.gg/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="font-display text-2xl">Discord</div>
          <p className="text-sm text-paper/70 mt-2">
            实时聊天频道（占位链接，请替换为你自己的邀请码）
          </p>
        </a>
        <a
          className="border border-white/10 hover:border-accent p-6 block"
          href="mailto:hello@example.com"
        >
          <div className="font-display text-2xl">联系我们</div>
          <p className="text-sm text-paper/70 mt-2">
            权利声明、投稿、合作邮件（示例地址，请替换）
          </p>
        </a>
      </div>

      <h2 className="font-display text-3xl mb-4">留言板</h2>
      <p className="text-sm text-muted mb-4">
        本页评论区由 Giscus 提供（基于 GitHub Discussions）。首次使用请前往{" "}
        <a
          className="text-accent"
          href="https://giscus.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          giscus.app
        </a>{" "}
        生成配置并填入 <code>components/Giscus.tsx</code>。
      </p>
      <Giscus />
    </div>
  );
}
