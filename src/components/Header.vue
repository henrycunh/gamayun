<template>
    <!-- 
        HEADER COMPONENT
        Contains the 'logo' and a search bar, used
        to present the first look into the application.
     -->
    <header>
        <h1 class='title'>Gamayun</h1>
        <form @submit.prevent='submitSearch'>
            <input type='text' v-model="searchTerm"/>
            <i class="icon fas fa-search"></i>
        </form>
    </header>
</template>

<script>
// Imports
import SearchStore from '../stores/SearchStore'

// Module
export default {
    data(){ 
        return {
            searchTerm: ''
        }
    },
    methods: {
        /**
         * Submits the search term to the Store
         * for data fetching
         */
        submitSearch(){
            SearchStore.search(this.searchTerm)
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        padding-top: 10%
        h1.title
            text-align: center
            font-size: 72pt
            letter-spacing: -.075em
            font-weight: 100
            margin: 0
            font-family: $ff
            color: $primary
        form
            display: block
            text-align: center
            input
                width: 60%
                margin-top: 20px
                font-family: $ffp
                font-size: 20pt
                padding: 30px 40px
                border-radius: 100px
                outline: none
                color: #ECF0F1
                background: rgba(0, 0, 0, .3)
                border: 0
            i
                position: relative
                color: #ECF0F1
                font-size: 24pt
                left: -70px


</style>
