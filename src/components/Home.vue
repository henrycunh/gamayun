<template>
    <main>
        <transition leave-active-class="animated flipOutX" enter-active-class="animated flipInX">
            <NavBar v-if="!StateStore.isTab('home')"/>
        </transition>
        <transition leave-active-class="animated zoomOut" enter-active-class="animated zoomIn">
            <Header v-if="StateStore.isTab('home')"/>
        </transition>
        <transition leave-active-class="animated zoomOut" enter-active-class="animated zoomIn">
            <SearchDisplay v-if="!StateStore.isTab('home')"/>
        </transition>
        <Background/>
    </main>
</template>

<script>
import NavBar from "./NavBar.vue";
import Background from "./Background.vue";
import Header from "./Header.vue";
import SearchDisplay from "./SearchDisplay.vue";
import StateStore from "../stores/StateStore"

export default {
    components: {
        NavBar, Background, Header, SearchDisplay
    },
    data(){
        return {
            StateStore,
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
    // Header
    //     opacity: 0
    //     transition: .5s ease
    //     &.visible
    //         opacity: 1
    //         transition: .5s ease
</style>
