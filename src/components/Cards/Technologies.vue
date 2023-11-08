<template>
    <PersonalCard>
        <h1>Technologies</h1>
        <v-carousel hide-delimiter-background show-arrows="hover">
            <v-carousel-item>
                <v-sheet class="tech-wrapper">
                    <h2>API</h2>
                    <div class="tech-logo">
                        <div class="logo">
                            <v-img :src="expressLogo"></v-img>
                            <v-img class="reflect" :src="expressLogo"></v-img>
                        </div>
                        <div class="logo">
                            <v-img :src="quarkusLogo"></v-img>
                            <v-img class="reflect" :src="quarkusLogo"></v-img>
                        </div>
                        <div class="logo">
                            <v-img :src="fastapiLogo"></v-img>
                            <v-img class="reflect" :src="fastapiLogo"></v-img>
                        </div>
                    </div>
                    <div class="tech-description">
                        {{ $t("apiDescription") }}
                    </div>
                </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
                <v-sheet class="tech-wrapper">
                    <h2>Frontend</h2>
                    <div class="tech-logo">
                        <div class="logo">
                            <v-img :src="reactLogo"></v-img>
                            <v-img class="reflect" :src="reactLogo"></v-img>
                        </div>
                        <div class="logo">
                            <v-img :src="vueLogo"></v-img>
                            <v-img class="reflect" :src="vueLogo"></v-img>
                        </div>
                        <div class="logo">
                            <v-img :src="htmlLogo"></v-img>
                            <v-img class="reflect" :src="htmlLogo"></v-img>
                        </div>
                    </div>
                    <div class="tech-description">
                        {{ $t("frontendDescription") }}
                    </div>
                </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
                <v-sheet class="tech-wrapper">
                    <h2>Backend</h2>
                    <div class="tech-logo">
                        <div class="logo">
                            <v-img :src="cLogo"></v-img>
                            <v-img class="reflect" :src="cLogo"></v-img>
                        </div>
                        <div class="logo">
                            <v-img :src="kotlinLogo"></v-img>
                            <v-img class="reflect" :src="kotlinLogo"></v-img>
                        </div>
                        <div class="logo">
                            <v-img :src="pythonLogo"></v-img>
                            <v-img class="reflect" :src="pythonLogo"></v-img>
                        </div>
                    </div>
                    <div class="tech-description">
                        {{ $t("backendDescription") }}
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </PersonalCard>
</template>

<script lang="ts">
import PersonalCard from "./PersonalCard.vue";
import pythonLogo from "@/assets/python.png";
import expressLogo from "@/assets/express.png";
import fastapiLogo from "@/assets/fastapi.jpg";
import quarkusLogo from "@/assets/quarkus.png";
import vueLogo from "@/assets/vue.png";
import reactLogo from "@/assets/react.png";
import htmlLogo from "@/assets/html.png";
import cLogo from "@/assets/c.png";
import kotlinLogo from "@/assets/kotlin.png";

export default {
    components: {
        PersonalCard,
    },
    setup() {
        return {
            pythonLogo,
            expressLogo,
            quarkusLogo,
            fastapiLogo,
            vueLogo,
            reactLogo,
            htmlLogo,
            kotlinLogo,
            cLogo,
        };
    },
};
</script>

<style scoped>
.tech-wrapper {
    height: 100%;
    width: 95%;
    margin: auto;
}

.tech-logo {
    height: 30%;
    display: flex;
    flex-direction: row;
    transform: scaleY(1);
}

.logo {
    width: 100%;
    height: 65%;
}

.reflect {
    mask-image: linear-gradient(to bottom, transparent 25%, black 75%);
    transform: scaleY(-0.5);
    opacity: 0.3;
    position: relative;
    top: -15%;
}

.tech-description {
    white-space: pre-line;
    margin-top: 20px;
    text-align: justify;
}

@media (max-width: 720px) {
    .tech-wrapper {
        height: auto;
    }

    .tech-logo {
        display: none;
    }

    .tech-description {
        margin-top: 0;
    }
}
</style>
