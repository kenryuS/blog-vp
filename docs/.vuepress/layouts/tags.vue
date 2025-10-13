<script setup>
import { useBlogCategory } from '@vuepress/plugin-blog/client';
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';

const categoryMap = useBlogCategory('tags');
</script>

<template>
    <ParentLayout>
        <template #page-content-top>
            <h1>タグ 一覧</h1>
            <ul class="category-wrapper">
                <li
                    v-for="({ items, path}, name) in categoryMap.map"
                    :key="name"
                ><RouteLink
                    :to="path"
                    class="category"
                >
                    {{ name }}:
                    <span class="category-num">
                        {{ items.length }}
                    </span>
                </RouteLink></li>
            </ul>
        </template>
    </ParentLayout>
</template>
