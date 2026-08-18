# My Notes — Hexo + NexT.Mist

这是一个已经配置好的个人技术博客骨架，风格参考经典的 **Hexo + NexT.Mist** 技术博客。

## 1. 当前站点信息

- 站点名：`ChuJie Notes`
- GitHub：`ChuJie-WG`
- 主页：`https://ChuJie-WG.github.io`
- 邮箱：`953547388@qq.com`

## 2. Windows 本地运行

安装 Node.js LTS 和 Git 后，在此目录打开 PowerShell：

```powershell
npm install
npm run server
```

浏览器访问：

```text
http://localhost:4000
```

## 3. 新建文章

```powershell
npx hexo new "我的第一篇技术文章"
```

随后编辑：

```text
source/_posts/我的第一篇技术文章.md
```

写作使用 Markdown。

## 4. 发布到 GitHub Pages

### 用户主页方式（最像参考网站）

1. 注册/登录 GitHub。
2. 新建仓库，仓库名必须是：`你的用户名.github.io`。
3. 在仓库 `Settings → Pages` 中将 Source 设为 **GitHub Actions**。
4. 推送本项目到 `main` 分支：

```powershell
git init
git add .
git commit -m "init blog"
git branch -M main
git remote add origin https://github.com/ChuJie-WG/ChuJie-WG.github.io.git
git push -u origin main
```

GitHub Actions 会自动执行 `npm install`、生成 Hexo 静态页面并发布。

发布成功后访问：

```text
https://ChuJie-WG.github.io
```

## 5. 常用命令

```powershell
npm run server        # 本地预览
npm run build         # 生成 public 静态文件
npx hexo clean        # 清理缓存
npx hexo new "标题"   # 新建文章
```

## 6. 目录说明

```text
_config.yml                  Hexo 主配置
_config.next.yml             NexT.Mist 主题配置
source/_posts/               文章 Markdown
source/tags/                 标签页
source/categories/           分类页
source/about/                关于页
source/images/               头像、图标和文章图片
source/_data/styles.styl     自定义样式
.github/workflows/hexo.yml   GitHub Pages 自动部署
preview/index.html           不安装 Hexo 也能直接打开的效果预览
```

## 7. 图片怎么放

最简单的方法是将图片放到：

```text
source/images/
```

文章里写：

```markdown
![示意图](/images/example.png)
```

## 8. 文章 URL

已配置：

```text
permalink: post/:abbrlink.html
```

因此文章会生成类似：

```text
/post/86a98cff.html
```

这样的短链接。
