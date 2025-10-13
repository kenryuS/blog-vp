import { defineClientConfig } from 'vuepress/client';
import BlogLayout from "./layouts/blog.vue";
import DefaultLayout from "./layouts/default.vue";
import TagsLayout from "./layouts/tags.vue";
import TagItemLayout from "./layouts/tagItem.vue";

export default defineClientConfig({
    enhance({ app, router, siteData}) {},
    setup() {},
    rootComponents: [],
    layouts: {
        BlogLayout,
        DefaultLayout,
        TagsLayout,
        TagItemLayout,
    },
});
