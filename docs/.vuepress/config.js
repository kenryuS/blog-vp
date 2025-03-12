import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";
import { copyrightPlugin } from "@vuepress/plugin-copyright";
import { iconPlugin } from "@vuepress/plugin-icon";
import { commentPlugin } from "@vuepress/plugin-comment";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";
import { markdownStylizePlugin } from "@vuepress/plugin-markdown-stylize";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { defineUserConfig } from "vuepress";
import bars from "./bars";
import localeConf from "./locale-conf";

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
            description: "kenryuSが作る本当に「最後」のウエブサイト。",
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
        }),
        sitemapPlugin({
            hostname: "kenryus.github.io/blog-vp",
            devServer: true,
            changefreq: "daily"
        }),
        slimsearchPlugin({
            indexContent: true,
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
