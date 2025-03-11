import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { seoPlugin } from "@vuepress/plugin-seo";
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
    head: [["link", { rel: "icon", href: "/blog-vp/logo.png" }]],
    plugins: [
        seoPlugin({
            hostname: "kenryus.github.io/blog-vp",
        }),
    ],
});
