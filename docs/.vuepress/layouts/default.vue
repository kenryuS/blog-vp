<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import LicenseDisplay from '../components/licenseDisplay.vue';
</script>

<template>
    <ParentLayout>
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
