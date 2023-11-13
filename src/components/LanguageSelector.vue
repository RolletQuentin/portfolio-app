<template>
    <img :src="logo" @click="changeLanguage" />
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import franceLogo from "../assets/france.png";
import usLogo from "../assets/united-states.png";

export default {
    setup() {
        const { locale } = useI18n();
        const logo = ref(locale.value === "fr" ? franceLogo : usLogo);
        const changeLanguage = () => {
            locale.value = locale.value === "fr" ? "en" : "fr";
        };

        watch(
            () => locale.value,
            (newLanguage: string) => {
                logo.value = newLanguage === "fr" ? franceLogo : usLogo;
            },
        );

        return {
            changeLanguage,
            logo,
        };
    },
};
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 30px;
}
img:hover {
    cursor: pointer;
}
</style>
