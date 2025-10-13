<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import LicenseDisplay from '../components/licenseDisplay.vue';
import { useColorScheme } from "../composables/colorScheme";

const { colorScheme } = useColorScheme();
</script>

<template>
    <ParentLayout>
        <template #page-content-bottom>
            <CommentService :darkmode="colorScheme == 'dark'" />
        </template>
        <template #page-bottom>
            <div class="license">
                <LicenseDisplay />
            </div>
        </template>
    </ParentLayout>
</template>

<style lang="css">
.license {
    text-align: center;
}
</style>
