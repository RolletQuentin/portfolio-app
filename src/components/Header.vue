<template>
    <header>
        <h1>Portfolio</h1>
        <div class="right">
            <v-btn :href="resume" download>{{ $t("resume") }}</v-btn>
            <LanguageSelector class="selector" />
        </div>
    </header>
</template>

<script lang="ts">
import LanguageSelector from "@/components/LanguageSelector.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { watch } from "vue";

export default {
    components: {
        LanguageSelector,
    },
    setup() {
        const { locale } = useI18n();
        const resume = ref();

        function setResume() {
            if (locale.value === "fr") {
                resume.value = "/portfolio-app/CV.pdf";
            } else {
                resume.value = "/portfolio-app/CV_english.pdf";
            }
        }
        setResume();

        watch(
            () => locale.value,
            () => setResume()
        );

        return {
            resume,
        };
    },
};
</script>

<style scoped>
header {
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.selector {
    height: 30px;
    width: 30px;
    margin-left: 15px;
}

.right {
    display: flex;
    justify-content: space-between;
}
</style>
