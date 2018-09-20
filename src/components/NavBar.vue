<template>
    <!-- 
        NAVBAR COMPONENT
        Contains a global search bar and a iteractable
        logo, used to go back to the home presentation
     -->
    <nav v-bind:class='{ active }'>
        <h1 v-on:click='goHome()' class="title">Gamayun</h1>

        <form @submit.prevent="submitSearch">
            <input type='text' v-model="searchInVal"/>
            <i class="icon fas fa-search"></i>
        </form>
    </nav>
</template>

<script>
// Imports
import SearchStore from '../stores/SearchStore'
import StateStore from '../stores/StateStore'

export default {
    props: ['active'],
    data(){
        return {
            searchInVal: ''
        }
    },
    methods: {
        /**
         * Submits the search term to the
         * store, in order to fetch data
         */
        submitSearch(){
            SearchStore.search(this.searchInVal)
        },
        /**
         * Switches the tab state to the
         * home presentation
         */
        goHome(){
            StateStore.toTab('home')
        }
    }
}
</script>

<style lang="sass" scoped>
    nav
        position: fixed
        top: 0
        right: 0
        left: 0
        padding: 10px 20px
        background: rgba(40, 40, 40, .8)
        // box-shadow: 0 2px 0px rgba(0, 0, 0, .4)
        h1.title
            cursor: pointer
            font-size: 28pt
            margin: 0
            margin-bottom: 5px
            position: relative
            top: 0px
            text-transform: lowercase
            letter-spacing: -.075em
            font-family: $ff
            color: $primary
            font-weight: 300
            float: left
        form 
            float: right
            input
                border: 0
                font-size: 14pt
                // border-bottom: 2px solid $primary
                background: #f9f9f9
                border-radius: 20px
                position: relative
                outline: none
                // top: -2px
                font-family: $ffp
                color: #666
                padding: 10px 20px
                padding-right: 30px
            .icon
                position: relative
                top: -2px
                left: -30px
                color: $primary
</style>
