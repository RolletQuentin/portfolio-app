<template>
    <div>
        <lateral-menu></lateral-menu>
        <default-view />
        <language-selector />
    </div>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import LateralMenu from "@/components/LateralMenu.vue";
</script>
