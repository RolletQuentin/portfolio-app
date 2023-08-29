<template>
    <header>
        <h1>Portfolio</h1>
        <div>
            <LanguageSelector class="selector" />
        </div>
    </header>
</template>

<script lang="ts">
import LanguageSelector from "@/components/LanguageSelector.vue";

export default {
    components: {
        LanguageSelector,
    },
};
</script>

<style scoped>
header {
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.selector {
    height: 30px;
    width: 30px;
}
</style>
