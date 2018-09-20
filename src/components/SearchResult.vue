<template>
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
import StateStore from '../stores/StateStore'
export default {
    props: ['data'],
    data(){
        return{
            
            }
    },
    methods:{
        getImage(){
            if(this.data.imgs){
                // eslint-disable-next-line
                console.log(this.data.imgs.replace(/'/g, '"'))
                if(this.data.imgs.indexOf("[") != -1)
                    return JSON.parse( this.data.imgs.replace(/'/g, '"'))[0]
                return this.data.imgs
            }
        },
        viewProduct(){
            console.log(this.data)
            StateStore.currentProduct(this.data)
        }
    },
    mounted(){
        // eslint-disable-next-line
        console.log(this.data, this.getImage())
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
