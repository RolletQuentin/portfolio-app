<template>
    <PersonalCard>
        <h1>Technologies</h1>
        <v-carousel hide-delimiters>
            <v-carousel-item>
                <v-sheet color="blue" height="100%">
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">Slide</div>
                    </div>
                </v-sheet>
            </v-carousel-item>
            <v-carousel-item>Salut</v-carousel-item>
        </v-carousel>
    </PersonalCard>
</template>

<script lang="ts">
import PersonalCard from "./PersonalCard.vue";

export default {
    components: {
        PersonalCard,
    },
};
</script>
