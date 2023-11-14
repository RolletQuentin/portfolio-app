<template>
    <button :class="{ hovered: hover }">
        <slot></slot>
    </button>
</template>

<script lang="ts">
export default {
    name: "PersonalButton",
    props: {
        hover: Boolean,
    },
};
</script>

<style scoped>
button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 5px;
    border-radius: 50%;
}

button.hovered:hover {
    background-color: grey;
}
</style>
