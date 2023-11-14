<template>
    <menu>
        <div class="top">
            <PersonalButton @click="$emit('openMenu')"
                ><mdicon name="menu"
            /></PersonalButton>
        </div>

        <nav>
            <NavItem
                icon="home"
                :title="$t('home')"
                :reduced="!isOpen"
                class="item"
            />
            <NavItem
                icon="xml"
                title="Technologies"
                :reduced="!isOpen"
                class="item"
            />
            <NavItem
                icon="folder"
                :title="$t('projects')"
                :reduced="!isOpen"
                class="item"
            />
            <NavItem
                icon="badge-account-horizontal"
                :title="$t('experiences')"
                :reduced="!isOpen"
                class="item"
            />
            <NavItem
                icon="notebook"
                :title="$t('blog')"
                :reduced="!isOpen"
                class="item"
            />
        </nav>
    </menu>
</template>

<script lang="ts">
import PersonalButton from "@/components/Button.vue";
import NavItem from "./NavItem.vue";
import { ref } from "vue";
import { watch } from "vue";

export default {
    components: {
        PersonalButton,
        NavItem,
    },
    props: {
        isOpen: Boolean,
    },
    setup(props) {
        const width = ref(props.isOpen ? "200px" : "54px");

        watch(
            () => props.isOpen,
            () => {
                width.value = props.isOpen ? "200px" : "54px";
            },
        );

        return {
            width,
        };
    },
};
</script>

<style scoped lang="scss">
menu {
    background-color: #8d99ae;
    position: fixed;
    width: v-bind("width");
    height: 100vh;
    transition: 0.5s ease;
    overflow: hidden;

    .top {
        width: 200px;
        height: 70px;
        position: relative;
        overflow: visible;

        button {
            position: absolute;
            /* center vertically */
            top: 50%;
            transform: translateY(-50%);

            left: 10px;
        }
    }

    nav {
        position: absolute;
        top: 100px;
        width: 200px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        .item:hover {
            transform: scale(103%);
        }
    }
}
</style>
