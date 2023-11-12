<template>
    <header>
        <div class="left">
            <h1>Portfolio</h1>
            <nav><a :href="blog">Blog</a></nav>
        </div>
        <div class="right">
            <v-btn :href="resume" target="_blank">{{ $t("resume") }}</v-btn>
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
        const blog = ref();

        function setResume() {
            if (locale.value === "fr") {
                resume.value =
                    "https://drive.google.com/file/d/1cZYEdTFjTXZVNqXsmkOrp5ZGUuqhXGi7/view";
            } else {
                resume.value =
                    "https://drive.google.com/file/d/1ynDz0XzV98SVXDYzDeKSxSJeBTBmBdE4/view";
            }
        }
        setResume();

        function setBlogLink() {
            locale.value === "fr"
                ? (blog.value = "https://rolletquentin.com/blog/fr/")
                : (blog.value = "https://rolletquentin.com/blog/en-us/");
        }
        setBlogLink();

        watch(
            () => locale.value,
            () => {
                setResume();
                setBlogLink();
            }
        );

        return {
            resume,
            blog,
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

.left {
    display: flex;
    align-items: center;
}

.left h1 {
    font-size: 2em;
    margin-right: 30px;
}

.left nav a {
    text-decoration: none;
    color: black;
    font-size: 1.25em;
    font-weight: 500;
}

.v-btn {
    color: #ffffff;
    background-color: #2e368d;
}
</style>
