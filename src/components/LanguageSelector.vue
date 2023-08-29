<template>
    <v-img :src="logo" @click="changeLanguage" width="30px"> </v-img>
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
            }
        );

        return {
            changeLanguage,
            logo,
        };
    },
};
</script>

<style scoped>
.v-img:hover {
    border-radius: 50%;
    cursor: pointer;
}
</style>
