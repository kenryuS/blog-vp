import { defineClientConfig } from 'vuepress/client';
import BlogLayout from "./layouts/blog.vue";

export default defineClientConfig({
    enhance({ app, router, siteData}) {},
    setup() {},
    rootComponents: [],
    layouts: {
        BlogLayout,
    },
});
