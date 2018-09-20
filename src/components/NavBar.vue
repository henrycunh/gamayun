<template>
    <nav v-bind:class='{ active }'>
        <h1 class="title">Gamayun</h1>

        <form @submit.prevent="submitSearch">
            <input type='text' v-model="searchInVal" placeholder="pesquisar um produto..."/>
            <i class="icon fas fa-search"></i>
        </form>
    </nav>
</template>

<script>
export default {
    props: ['active'],
    data(){
        return {
            searchInVal: ''
        }
    },
    methods: {
        submitSearch(){
            // eslint-disable-next-line
            console.log(this.searchInVal)
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
        background: #ECF0F1
        box-shadow: 0 2px 10px #333
        opacity: 0  
        transition: .5s ease
        &.active
            transition: .5s ease
            opacity: 1
        h1.title
            font-size: 20pt
            margin: 0
            position: relative
            top: -2px
            font-family: $ff
            color: $primary
            float: left
        form 
            float: right
            input
                border: 0
                font-size: 12pt
                border-bottom: 2px solid $primary
                background: transparent
                position: relative
                outline: none
                font-family: $ffp
                color: #666
                padding: 5px 30px
                // padding-right: 20px
            .icon
                position: relative
                left: -20px
                color: $primary
</style>
