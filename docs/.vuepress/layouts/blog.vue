<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import { useColorScheme } from "../composables/colorScheme";

const { colorScheme } = useColorScheme();
</script>

<template>
    <ParentLayout>
        <template #page-content-bottom>
            <CommentService :darkmode="colorScheme == 'dark'" />
        </template>
    </ParentLayout>
</template>

<style lang="css">
.test {
    text-align: center;
}
</style>
