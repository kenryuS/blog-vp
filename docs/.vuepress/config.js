import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
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
        '/': {
	    lang: 'ja-JP',
            title: "kenryuS ブログ",
            description: "kenryuSが作る本当に「最後」のブログサイト。",
	},
    },
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    permalinkPattern: ":year-:month-:day-:slug",
});
