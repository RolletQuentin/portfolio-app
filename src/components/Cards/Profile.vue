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
        </div>
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
