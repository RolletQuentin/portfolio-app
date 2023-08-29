<template>
    <PersonalCard>
        <v-img src="/photo.JPG" />
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

export default {
    components: {
        PersonalCard,
    },
    setup() {},
};
</script>

<style>
.v-img {
    border-radius: 50%;
}
</style>
