<template>
    <!-- 
        HOME COMPONENT
        Contains all the other main components, handles 
        transitions and structure.
     -->
    <main>
        <transition leave-active-class="animated slideOutUp" enter-active-class="animated slideInDown">
            <NavBar v-if="!StateStore.isTab('home')"/>
        </transition>
        <transition leave-active-class="animated zoomOut" enter-active-class="animated zoomIn">
            <Header v-if="StateStore.isTab('home')"/>
        </transition>
        <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn">
            <SearchDisplay v-if="!StateStore.isTab('home')"/>
        </transition>
        <transition leave-active-class="animated fadeOut" enter-active-class="animated fadeIn">
            <ProductModal v-if="StateStore.currentProduct()"/>
        </transition>
        <Background/>
    </main>
</template>

<script>
// Imports
import NavBar from "./NavBar.vue"
import Background from "./Background.vue"
import Header from "./Header.vue"
import SearchDisplay from "./SearchDisplay.vue"
import ProductModal from "./ProductModal.vue"
import StateStore from "../stores/StateStore"

// Module
export default {
    components: {
        NavBar, Background, Header, SearchDisplay, ProductModal
    },
    data(){
        return { StateStore }
    }
}

</script>
