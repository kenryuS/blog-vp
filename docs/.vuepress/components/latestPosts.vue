<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client';
const typeMap = useBlogType('latest');
const prop = defineProps({
    take: Number || null,
});
</script>

<template>
    <div class="article-wrapper">
        <article
            v-for="({ info, path }) in (
                prop.take != null ?
                typeMap.items.slice(0, prop.take) :
                typeMap.items
            )"
            :key="path"
            class="article"
            @click="$router.push(path)"
        >
            <header v-if="info.title" class="title">
                {{ info.title }}
            </header>
            <div class="article-info">
                <span class="author">
                    筆者：{{ info.author }}
                </span>
                <span v-if="info.date" class="date">
                    投稿日時：{{ new Date(info.date).toLocaleDateString() }}
                </span>
                <span v-if="info.tags" class="tags">
                    タグ：{{ info.tags.slice(0,3).join(', ') }}{{ info.tags.length > 3 ? "..." : ""}}
                </span>
            </div>
            <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
        </article>
    </div>
</template>

<style>
.article {
    border-radius: 1rem;
    border: solid var(--vp-c-border) 2px;
    transition: ease 0.15s;
    display: block;
    padding: 1rem;
    margin: 0.5rem 0;
}

.article:hover {
    cursor: pointer;
    border-color: var(--vp-c-accent-hover);
    transition: ease 0.15s;
    & > * {
        text-decoration: underline;
    }
}

.title {
    font-size: larger;
    color: var(--vp-c-accent);
    margin-bottom: 0.5rem;
}

.author, .date {
    margin-right: 0.5rem;
}

.article:last-child {
    margin-top: 0.5rem;
    margin-bottom: 0;
}

.article:first-child {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
</style>
