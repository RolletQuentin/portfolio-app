<template>
    <div>
        <PersonalButton>
            <mdicon class="icon" :name="$props.icon" />
        </PersonalButton>
        <span class="title">{{ $props.title }}</span>
    </div>
</template>

<script lang="ts">
import PersonalButton from "./Button.vue";

export default {
    name: "NavItem",
    props: {
        icon: String,
        title: String,
    },
    components: { PersonalButton },
};
</script>

<style scoped lang="scss">
div {
    display: flex;
    align-items: center;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }

    .title {
        margin-left: 15px;
        text-transform: uppercase;
        font-size: 0.9em;
    }
}
</style>
