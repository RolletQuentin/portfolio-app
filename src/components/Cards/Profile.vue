<template>
    <PersonalCard>
        <v-img :src="photo" />
        <h1>Quentin ROLLET</h1>
        <v-list>
            <v-list-item prepend-icon="mdi-email"
                >rolletquen@gmail.com</v-list-item
            >
            <v-list-item prepend-icon="mdi-map-marker"
                >Pau (France)</v-list-item
            >
        </v-list>
    </PersonalCard>
</template>

<script lang="ts">
import PersonalCard from "./PersonalCard.vue";
import photo from "@/assets/photo.jpg";

export default {
    components: {
        PersonalCard,
    },
    setup() {
        return {
            photo,
        };
    },
};
</script>

<style>
.v-img {
    border-radius: 50%;
}
</style>
