<template>
    <main>
        <NavBar v-bind:active='navbarActive'/>
        <transition enter-active-class="animated zoomOut">
            <Header/>
        </transition>
        <Background/>
    </main>
</template>

<script>
import NavBar from "./NavBar.vue";
import Background from "./Background.vue";
import Header from "./Header.vue";

export default {
    components: {
        NavBar, Background, Header
    },
    data(){
        return {
            navbarActive: false
        }
    },
    methods: {
        
    }
}

</script>

<style lang="sass" scoped>
    main
        align-items: center
</style>
