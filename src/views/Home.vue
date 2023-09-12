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
    padding: 10px;
}

.profile {
    width: 300px;
}

.github-projects {
    width: 800px;
    height: 500px;
    overflow: scroll;
}

.experiences {
    width: 500px;
}

.technologies {
    width: 1000px;
}
</style>
