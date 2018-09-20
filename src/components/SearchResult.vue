<template>
    <!-- 
        SEARCH RESULT COMPONENT
        Represents the data of every result in a
        simple way, and holds the functionality to
        opening said data in a modal, by adding the
        current product to the state
     -->
    <article @click='viewProduct()'>
        <div class="image">
            <img v-bind:src="getImage()" v-bind:alt="data.title"/>
        </div>
        <div class="content">
            <div class="title">
                {{ data.title.length > 50 ? `${data.title.substring(0, 50)}...` : data.title }}
            </div> 
            <div class="price">
                {{ data.price ? `R$${data.price}` : "Preço não disponível"}}
            </div>
        </div>
    </article>
</template>

<script>
// Import
import StateStore from '../stores/StateStore'

// Module
export default {
    props: ['data'],
    data(){
        return{
            
            }
    },
    methods:{
        /**
         * Parses the image, removing
         * characters impurities
         */
        getImage(){
            if(this.data.imgs){
                if(this.data.imgs.indexOf("[") != -1)
                    return JSON.parse( this.data.imgs.replace(/'/g, '"'))[0]
                return this.data.imgs
            }
        },
        /**
         * Adds current product to the state
         */
        viewProduct(){
            StateStore.currentProduct(this.data)
        }
    }
}
</script>

<style lang="sass" scoped>
    article
        width: 100%
        background: #fff
        height: 275px
        display: grid
        grid-template-rows: 1fr 2fr
        text-align: center
        padding: 10px
        box-sizing: border-box
        box-shadow: 0 4px 10px #111
        margin: 10px 0
        border-radius: 10px
        transition: .5s ease
        cursor: pointer
        &:hover
            transition: .5s ease
            transform: scale(1.1)    
        .image
            grid-area: "image"
            img
                width: 125px
        .content
            font-family: $ffp
            .title
                text-align: left
                color: $primary
                font-weight: bold
                font-size: 15pt
            .price
                background: $primary
                color: #fff
                display: inline-block
                float: right
                padding: 5px 15px
                margin: 5px
                border-radius: 15px
                font-size: 10pt
                font-weight: bold
                grid-area: "price"
                text-align: right
</style>
