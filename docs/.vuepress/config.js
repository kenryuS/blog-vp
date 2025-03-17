import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";
import { copyrightPlugin } from "@vuepress/plugin-copyright";
import { iconPlugin } from "@vuepress/plugin-icon";
import { commentPlugin } from "@vuepress/plugin-comment";
import { feedPlugin } from "@vuepress/plugin-feed";
import { blogPlugin } from "@vuepress/plugin-blog";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";
import { markdownStylizePlugin } from "@vuepress/plugin-markdown-stylize";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { defineUserConfig } from "vuepress";
import bars from "./bars";
import localeConf from "./locale-conf";
import { dateSorter } from "@vuepress/helper";

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: "/logo.png",
        contributors: true,
        lastUpdated: true,
        editLink: false,
        locales: localeConf.conf,
        navbar: bars.nav,
        sidebar: bars.side,
    }),
    locales: {
        "/": {
            lang: "ja-JP",
            title: "kenryuS",
            description: "kenryuSが作る本当に「最後」の個人ウエブサイト。",
        },
    },
    base: "/blog-vp/",
    head: [
        ["link", { rel: "icon", href: "/blog-vp/logo.png" }],
        ["meta", { name: "google-site-verification", content: "r4tYfGEeuNfyHHbDRkJLq62B1eqFxzU36lSKuQMDLwk"}]
    ],
    plugins: [
        seoPlugin({
            hostname: "kenryus.github.io/blog-vp",
            author: {
                name: "kenryuS",
                url: "https://kenryus.github.io/blog-vp",
            },
            isArticle: (page) => (page.frontmatter.comment == true),
        }),
        sitemapPlugin({
            hostname: "kenryus.github.io/blog-vp",
            devServer: true,
            changefreq: "daily"
        }),
        slimsearchPlugin({
            indexContent: true,
            searchDelay: 200,
            customFields: [
                {
                    name: 'tag',
                    getter: (page) => page.frontmatter.tags,
                    formatter: 'タグ: $content',
                }
            ],
        }),
        copyrightPlugin({
            author: "Kenryu Shibata",
            license: "CC-BY-NC-SA-4.0",
            canonical: "https://kenryus.github.io/blog-vp",
            triggerLength: 50,
        }),
        iconPlugin({
            assets: 'iconify',
            markdown: true,
        }),
        commentPlugin({
            provider: "Giscus",
            comment: false,
            category: "General",
            categoryId: "DIC_kwDOOFjYDM4Cn5qB",
            repo: "kenryuS/blog-vp",
            repoId: "R_kgDOOFjYDA",
            lazyLoading: true,
            reactionsEnabled: true,
            darkTheme: "gruvbox_dark",
            lightTheme: "gruvbox_light",
        }),
        feedPlugin({
            hostname: "kenryus.github.io",
            atom: true,
            json: false,
            rss: true,
            filter: ({ filePathRelative, frontmatter }) => {
                if (!filePathRelative) return false;
                if (!(filePathRelative.startsWith('blog/'))) return false;
                if (frontmatter.home) return false;
                return true;
            },
        }),
        blogPlugin({
            category: [
                {
                    key: 'tags',
                    getter: ({ frontmatter }) => frontmatter.tags || [],
                    path: '/blog/tags/',
                    layout: 'TagsLayout',
                    frontmatter: () => ({ title: 'タグ ページ', prev: false, next: false }),
                    itemPath: '/blog/tags/:name/',
                    itemLayout: 'TagItemLayout',
                    itemFrontmatter: (name) => ({ title: `タグ：${name}`, prev: false, next: false }),
                    sorter: (pA, pB) => dateSorter(
                        (pA.data.git.createdTime || pA.frontmatter.date),
                        (pB.data.git.createdTime || pB.frontmatter.date)
                    ),
                },
            ],
            type: [
                {
                    key: 'latest',
                    filter: ({ frontmatter }) => frontmatter.tags,
                    sorter: (pA, pB) => dateSorter(
                        (pA.data.git.createdTime || pA.frontmatter.date),
                        (pB.data.git.createdTime || pB.frontmatter.date)
                    ),
                }
            ],
            excerpt: true,
            excerptLength: 50,
            filter: ({ filePathRelative, frontmatter }) => {
                if (!filePathRelative) return false;
                if (!(filePathRelative.startsWith('blog/'))) return false;
                if (frontmatter.home) return false;
                return true;
            },
            getInfo: ({ frontmatter, git = {}, data = {} }) => {
                const info = {
                    title: frontmatter.title || "",
                    author: frontmatter.author || "kenryuS",
                    date: frontmatter.date || git.createdTime || null,
                    tags: frontmatter.tags || [],
                }
                return info;
            }
        }),
        markdownExtPlugin({
            gfm: true,
        }),
        markdownStylizePlugin({
            align: true,
            attrs: false,
            mark: true,
            spoiler: true,
            sup: false,
            sub: false,
        }),
        markdownMathPlugin({
            type: 'katex',
            copy: false,
            mhchem: false,
        })
    ],
});
