<template>
    <PersonalCard>
        <h1>{{ $t("experiences") }}</h1>
        <span>{{ $t("experiencesDescription") }}</span>

        <v-list>
            <v-list-item
                :title="$t('privateTeacher') + ' | ' + ($t('since') + ' 2022')"
                :subtitle="$t('privateTeacherLocation')"
                >{{ $t("privateTeacherDescription") }}</v-list-item
            >
            <v-list-item
                :title="
                    $t('fullstackDeveloperCorpauration') +
                    ' | 07/2023 - 08/2023'
                "
                :subtitle="$t('fullstackDeveloperCorpaurationLocation')"
                >{{
                    $t("fullstackDeveloperCorpaurationDescription")
                }}</v-list-item
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
};
</script>
