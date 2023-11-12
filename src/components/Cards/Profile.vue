<template>
    <PersonalCard class="profile">
        <v-img :src="photo" />
        <div class="infos">
            <h1>Quentin ROLLET</h1>
            <v-list>
                <v-list-item prepend-icon="mdi-email"
                    >rolletquen@gmail.com</v-list-item
                >
                <v-list-item prepend-icon="mdi-map-marker"
                    >Pau (France)</v-list-item
                >
            </v-list>
            <v-btn :href="resume" target="_blank">{{ $t("resume") }}</v-btn>
        </div>
    </PersonalCard>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import PersonalCard from "./PersonalCard.vue";
import photo from "@/assets/photo.jpg";

export default {
    components: {
        PersonalCard,
    },
    setup() {
        const { locale } = useI18n();
        const resume = ref();

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

        watch(
            () => locale.value,
            () => {
                setResume();
            }
        );

        return {
            resume,
            photo,
        };
    },
};
</script>

<style scoped>
.profile {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
}

.infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 2;
}
.v-img {
    min-width: 150px;
    max-width: 100%;
    flex: 1;
}

.v-btn {
    color: #ffffff;
    background-color: #2e368d;
}

@media (max-width: 980px) {
    .profile {
        flex-direction: row;
    }
}

@media (max-width: 512px) {
    .profile {
        flex-direction: column;
    }
}
</style>
