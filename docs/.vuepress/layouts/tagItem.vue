<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client';
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';

const categoryMap = useBlogCategory('tags');
</script>

<template>
    <ParentLayout>
        <template #page-content-top>
            <h1>Tag Page</h1>
            <div class="article-wrapper">
                <article
                    v-for="({ info, path }) in categoryMap.currentItems"
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
    </ParentLayout>
</template>
