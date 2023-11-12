<template>
    <div class="wrapper">
        <Profile class="profile" />
        <Technologies class="technologies" />
        <Experiences class="experiences" />
        <GithubProjects class="github-projects" />
    </div>
</template>

<script lang="ts">
import Profile from "@/components/Cards/Profile.vue";
import GithubProjects from "@/components/Cards/GithubProjects.vue";
import Experiences from "@/components/Cards/Experiences.vue";
import Technologies from "@/components/Cards/Technologies.vue";

export default {
    components: {
        Profile,
        GithubProjects,
        Experiences,
        Technologies,
    },
    setup() {},
};
</script>

<style>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
}

.profile {
    min-width: 300px;
    flex: 1;
}

.github-projects {
    min-width: 300px;
    max-height: 500px;
    overflow: scroll;
    flex: 5;
}

.experiences {
    min-width: 300px;
    flex: 2;
}

.technologies {
    min-width: 600px;
    flex: 5;
}

@media (max-width: 640px) {
    .technologies {
        min-width: 300px;
        max-width: 100%;
    }
}
</style>
