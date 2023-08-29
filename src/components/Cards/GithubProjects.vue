<template>
    <PersonalCard>
        <h1>{{ $t("githubProjects") }}</h1>
        <span>{{ $t("githubDescription") }}</span>
        <v-progress-circular v-if="isLoading" />
        <v-list v-else>
            <v-list-item
                v-for="repo in repos"
                :href="repo.html_url"
                :key="repo.id"
                :prepend-avatar="getAvatar(repo.language)"
                :title="repo.name"
                >{{ repo.description }}</v-list-item
            >
        </v-list>
    </PersonalCard>
</template>

<script lang="ts">
import PersonalCard from "@/components/Cards/PersonalCard.vue";
import { ref } from "vue";

import pythonLogo from "@/assets/python.png";
import phpLogo from "@/assets/PHP.png";
import cLogo from "@/assets/c.png";
import latexLogo from "@/assets/latex.png";
import htmlLogo from "@/assets/html.png";
import javascriptLogo from "@/assets/javascript.png";
import screenLogo from "@/assets/screen.png";

export default {
    components: {
        PersonalCard,
    },
    setup() {
        const isLoading = ref(false);
        const repos = ref();

        function getRepos() {
            isLoading.value = true;

            fetch("https://api.github.com/users/RolletQuentin/repos", {
                method: "GET",
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // sort the data by most recent push
                    repos.value = data.sort((a: any, b: any) => {
                        return (
                            new Date(b.pushed_at).getTime() -
                            new Date(a.pushed_at).getTime()
                        );
                    });
                    isLoading.value = false;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        getRepos();

        function getAvatar(language: string): string {
            var logo = "";

            switch (language) {
                case "Python":
                    logo = pythonLogo;
                    break;
                case "HTML":
                    logo = htmlLogo;
                    break;
                case "C":
                    logo = cLogo;
                    break;
                case "PHP":
                    logo = phpLogo;
                    break;
                case "TeX":
                    logo = latexLogo;
                    break;
                case "JavaScript":
                    logo = javascriptLogo;
                    break;
                default:
                    logo = screenLogo;
                    break;
            }

            return logo;
        }

        return {
            repos,
            isLoading,
            getAvatar,
        };
    },
};
</script>
