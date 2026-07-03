# King Gnu Fan Hub

King Gnu 非官方粉丝一站式聚合网站脚手架 —— 基于 **Next.js 14 (App Router) + TypeScript + Tailwind CSS**。

包含 6 大模块：
- **首页**：品牌门面 + 模块导航
- **乐队 `/about`**：成员、编年史
- **听歌 `/music`**：嵌入官方 YouTube / Spotify / Apple Music（合规）
- **新闻 `/news`**：可编辑的资讯汇总
- **购票 `/tickets`**：巡演信息与官方票务导流
- **周边 `/merch`**：官方 Store 汇总
- **社区 `/community`**：Giscus 评论 + Discord 入口

## 零、在 VS Code + Codex 中继续开发（推荐入口）

仓库地址：<https://github.com/verg0207/kinggnu-fansite>

```bash
# 1) 克隆仓库
git clone https://github.com/verg0207/kinggnu-fansite.git
cd kinggnu-fansite

# 2) 用 VS Code 打开
code .
```

在 VS Code 里启用 Codex（GitHub / OpenAI Codex）：

1. 打开 Extensions 面板（⇧⌘X），搜索并安装 **`openai.chatgpt`**（ChatGPT for VS Code，内置 Codex）
2. 或者 **`github.copilot`** + **`github.copilot-chat`**（GitHub Copilot Chat，同一账号 verg0207 登录即可）
3. Cmd+Shift+P → `ChatGPT: Sign In` / `GitHub Copilot: Sign In`，浏览器授权后回到 VS Code
4. 侧边栏的 Chat 面板输入自然语言指令即可，例如：
   - “把 `/updates` 页面的 YouTube 视频卡片换成瀑布流布局”
   - “给 `app/music/page.tsx` 加上按发行年份筛选的下拉框”
   - “把 `lib/shows.ts` 里所有场次数据接到一个免费的 Notion API 上”

**不装 Node 也能预览**：直接双击 `app-preview.html` 用浏览器打开，就是完整移动 App 版预览；想开 Service Worker/PWA 就 `python3 serve.py 8123` 起本地 HTTP。

**在线一键 Codespaces**（无需本地环境）：GitHub 仓库页 → 绿色 `Code` 按钮 → `Codespaces` → `Create codespace on main`，网页里就有完整 VS Code + Node 环境，直接 `npm install && npm run dev`。

## 一、本地跑起来

前置要求：Node.js ≥ 18.17

```bash
cd kinggnu-fansite
npm install
npm run dev
# 打开 http://localhost:3000
```

## 二、正式发布到公网（推荐 Vercel，免费额度即可）

### 步骤 1：把代码推到 GitHub

```bash
cd kinggnu-fansite
git init
git add .
git commit -m "chore: init king gnu fan hub"
# 在 GitHub 新建一个空仓库，然后：
git remote add origin git@github.com:<your-name>/kinggnu-fansite.git
git push -u origin main
```

### 步骤 2：一键部署 Vercel

1. 打开 https://vercel.com/new
2. 选择刚刚推送的 GitHub 仓库
3. Framework Preset 自动识别为 **Next.js**，直接点 **Deploy**
4. 首次部署完成后会得到形如 `kinggnu-fansite.vercel.app` 的公网域名

### 步骤 3（可选）：绑定自定义域名

在 Vercel Project → Settings → Domains 添加你的域名（如 `kinggnuhub.com`），按提示到域名商配置 DNS（A 记录到 `76.76.21.21` 或 CNAME 到 `cname.vercel-dns.com`）即可。

> 提示：如果你希望部署在国内，可以选择 **Netlify + Cloudflare** 或 **阿里云 EdgeRoutine / 云虚拟主机**，静态导出（`next build && next export`）后放在任何静态托管都行。国内域名需要 ICP 备案。

## 三、社区评论 Giscus 配置

1. 你的 GitHub 仓库设置 → Discussions 打开
2. 前往 https://giscus.app 按引导获取 `repo-id` / `category-id`
3. 打开 `components/Giscus.tsx`，替换 `REPO`、`REPO_ID`、`CATEGORY`、`CATEGORY_ID`
4. 重新部署即可

## 三点五、最新动态 `/updates` 实时聚合

`/updates` 页面把官方 YouTube、X (Twitter)、Instagram、Facebook 聚合到一处：

- **YouTube**：通过频道公开 RSS (`youtube.com/feeds/videos.xml?channel_id=…`) 免鉴权抓取，最新 12 条视频，Next.js ISR 每 **15 分钟**自动重新构建。
- **X / Twitter**：使用官方 `platform.twitter.com/widgets.js` 时间线组件（免 API Key，客户端渲染）。
- **Instagram**：Meta 已关闭无鉴权 profile 嵌入。默认给出账号跳转卡片。要拿到真实动态请见下方进阶方案。
- **Facebook**：使用官方 Page Plugin (`connect.facebook.net/.../sdk.js`)，免鉴权。
- **TikTok**：以入口按钮跳转（TikTok 无 profile widget，但可对单条视频用 `<blockquote class="tiktok-embed">`，需要视频 ID）。

替换成你自己的账号只要改一个文件 —— `lib/social.ts`：

```ts
export const social = {
  youtube: { channelId: "UCkB8HnJSDSJ2hkLQFUc-YrQ", ... },
  twitter: { handle: "KingGnu_JP", ... },
  instagram: { handle: "kinggnu.jp", ... },
  facebook: { handle: "KingGnu", ... },
  tiktok:   { handle: "kinggnu_official", ... },
};
```

**刷新频率调整**：改 `app/updates/page.tsx` 顶部 `export const revalidate = 900;`（秒），设置 60 就是 1 分钟刷一次；设置 0 每次请求都拉。

**Instagram 高级方案（拿到真实图墙）**：
1. 在 Meta for Developers 创建 App，走 Instagram Graph API OAuth 拿到长期 access token
2. 用 `GET /me/media?fields=media_url,permalink,caption,timestamp` 拉最近若干条
3. 在 `app/updates/page.tsx` 里以 server component 形式 `fetch()`，同样加 `next: { revalidate: 900 }`
4. Token 放 Vercel Env Variables（`INSTAGRAM_TOKEN`），别提交进 git

**TikTok 高级方案**：官方给了 `oEmbed` 端点 `https://www.tiktok.com/oembed?url=…`，可以按视频 URL 反查嵌入 HTML；组合最近若干条视频 URL 就能做出图墙。

**注意事项**：
- YouTube channel RSS 仅返回频道**公开**上传，Shorts / Live 也都能拿到
- Twitter/X widget 目前在部分地区（含中国大陆）需科学访问，是 Musk 收购后加的限制
- 页面首屏若嵌入体积大，可拆到单独 route 或做 lazy import

## 四、内容维护

所有可见数据都拆到 `lib/` 里，改数据不用碰页面：

- 最新动态：`lib/social.ts`（账号）+ `app/updates/page.tsx` 顶部 `revalidate`（刷新频率）
- 视频 / 专辑 / 单曲：`lib/music.ts`
- 巡演 / 演出：`lib/shows.ts`
- 新闻摘要：`lib/news.ts`
- 乐队信息：`app/about/page.tsx`

## 五、法律与版权提醒（务必阅读）

- 本站是 **非官方粉丝站**，页脚已包含免责声明
- 音乐一律使用官方 YouTube / Spotify **嵌入**，不要自行上传音频
- 图片建议使用官方公开素材、CC 授权图片、或粉丝原创拍摄照片
- 周边、门票只做**导流**到官方渠道，不要在本站发起交易
- 若权利人来函要求下架，48 小时内响应
- 如果做的比较大、有广告收入，务必咨询律师

## 六、目录结构

```
kinggnu-fansite/
├── app/
│   ├── layout.tsx          # 全站布局
│   ├── page.tsx            # 首页
│   ├── globals.css
│   ├── about/page.tsx
│   ├── updates/page.tsx    # 最新动态聚合（YT + X + IG + FB）
│   ├── music/page.tsx
│   ├── news/page.tsx
│   ├── tickets/page.tsx
│   ├── merch/page.tsx
│   └── community/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Giscus.tsx
│   ├── TwitterTimeline.tsx
│   ├── InstagramFeed.tsx
│   └── FacebookPage.tsx
├── lib/
│   ├── social.ts           # 官方社媒账号单一事实源
│   ├── youtube.ts          # YouTube channel RSS 抓取
│   ├── music.ts            # 视频/专辑/单曲数据
│   ├── shows.ts            # 巡演场次数据
│   └── news.ts             # 新闻摘要数据
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 七、后续可迭代

- 中日双语切换（next-intl）
- 歌曲歌词页（含日语原文 + 中文翻译，注意翻译版权）
- 用户投稿 fan art（Cloudinary + 审核队列）
- 巡演地图（Mapbox）
- 邮件订阅（Resend + Vercel KV）

Enjoy building. \m/
