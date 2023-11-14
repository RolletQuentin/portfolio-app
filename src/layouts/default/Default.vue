<template>
    <div id="body">
        <lateral-menu
            :logo="Logo"
            @openMenu="handleOpen"
            :isOpen="isOpen"
        ></lateral-menu>
        <default-view :class="{ large: !isOpen }" />
        <img class="logo" :src="Logo" />
        <language-selector class="language-selector" />
    </div>
</template>

<script lang="ts">
import DefaultView from "./View.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
import LateralMenu from "@/components/LateralMenu.vue";
import Logo from "@/assets/logo.png";
import { ref } from "vue";

export default {
    components: {
        DefaultView,
        LanguageSelector,
        LateralMenu,
    },
    setup() {
        const isOpen = ref(true);

        function handleOpen() {
            isOpen.value ? (isOpen.value = false) : (isOpen.value = true);
        }

        return {
            isOpen,
            handleOpen,
            Logo,
        };
    },
};
</script>

<style scoped lang="scss">
#body {
    display: flex;

    main {
        margin-top: 50px;
        margin-left: 200px;
        padding: 30px;
        transition: 0.5s ease;
    }

    .large {
        margin-left: 54px;
    }

    .logo {
        position: absolute;
        width: 100px;
        /* center vertically */
        top: 10px;
        left: 95px;
    }

    .language-selector {
        position: absolute;
        top: 20px;
        right: 40px;
    }
}
</style>
