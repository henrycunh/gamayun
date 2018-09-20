<template>
    <section>
        <span class="result-count">
            {{ SearchStore.resultsNum() ? `${SearchStore.resultsNum()} produtos encontrados.` : `Nenhum produto foi encontrado` }}
        </span>
        <transition-group class='results' enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
            <SearchResult 
                v-for="(result,index) in SearchStore.results()" 
                :key='index'
                :data="result"
            />
        </transition-group>
    </section>
</template>

<script>
import SearchResult from './SearchResult.vue'
import SearchStore from '../stores/SearchStore'

export default {
    components:{
        SearchResult
    },
    data(){
        return {
            SearchStore
        }
    }
}
</script>

<style lang="sass" scoped>
    section
        position: absolute
        top: 15%
        left: 50%
        transform: translateX(-50%)
        background: rgba(0,0,0,.3)
        padding: 20px
        box-shadow: 0 4px 10px #111
        border-radius: 10px
        width: 70%
        display: block
        margin: 0 auto
        height: 450px
        overflow-y: scroll
    .result-count
        color: #ECF0F1
        font-weight: bold
        font-size: 16pt
        font-family: $ffp
    .results
        display: grid
        grid-gap: 20px
        grid-template-columns: repeat(4, 1fr)
</style>
