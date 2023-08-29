<template>
    <div class="wrapper">
        <Profile class="profile" />
        <GithubProjects class="github-projects" />
    </div>
</template>

<script lang="ts">
import Profile from "@/components/Cards/Profile.vue";
import GithubProjects from "@/components/Cards/GithubProjects.vue";

export default {
    components: {
        Profile,
        GithubProjects,
    },
    setup() {},
};
</script>

<style>
.wrapper {
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
</style>
