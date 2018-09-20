<template>
    <!-- 
        PRODUCT MODAL COMPONENT
        Presents a modal containing the current
        product informations, clicking outside 
        it closes the modal
     -->
    <div>
        <div class="modal">
            <!-- Modal Content -->
            <div class="title">{{ product.title }}</div>
            <div class="grid">
                <div class="image">
                    <img v-bind:src="getImage()" alt="">
                </div>
                <div class="content">
                    <div class="breadcrumb" v-html="getBreadcrumb()"></div>
                    <p class="desc">{{product.desc ? product.desc : "Sem descrição disponível para esse produto."}}</p>
                    <ul class="variants" v-if="product.variant">
                        <div class="label">Dados do Produto</div>
                        <li v-for="(variant, index) in getVariants()" :key="index">
                            <span class="key">{{variant[0]}}</span> {{variant[1]}}
                        </li>
                    </ul>
                    <div class="price" v-bind:class="{available: product.price}">{{product.price || "Preço Indisponível"}}</div>
                    <a v-bind:href="product.url" class="link">Comprar</a>
                </div>
            </div>
        </div>
        <!-- Dims background -->
        <div class="dimmer" v-on:click="hideProduct"></div>
    </div>
</template>

<script>
// Imports
import StateStore from '../stores/StateStore'

// Module
export default {
    data(){
        return {
            StateStore,
            product: StateStore.currentProduct(),
            
        }
    },
    methods:{
        /**
         * Parses the image json, which contains some
         * impurities in the form of characters
         */
        getImage(){
            if(this.product.imgs){
                if(this.product.imgs.indexOf("[") != -1)
                    return JSON.parse( this.product.imgs.replace(/'/g, '"'))[0]
                return this.product.imgs
            }
        },
        /**
         * Generates the breadcrumb segment of the modal
         */
        getBreadcrumb(){
            if(this.product.breadcrumb){
                let terms = JSON.parse(this.product.breadcrumb.replace(/'/g, '"'))
                return terms.reduce((p, c) => p != "" ? `${p} <i class="fas fa-angle-right"></i> ${c}` : c, "")
            }
        },
        /**
         * Handles clicking outside the modal,
         * removing the product from the current
         * state
         */
        hideProduct: () => {
            StateStore.removeProduct()
        },
        /**
         * Handles the variants, converting
         * the object to a array of entries,
         * easier to manipulate
         */
        getVariants(){
            if(this.product.variant){
                console.log(Object.entries(JSON.parse(this.product.variant.replace(/'/g, '"'))))
                return Object.entries(JSON.parse(this.product.variant.replace(/'/g, '"')))
                    .map( entry => [entry[0], entry[1].join(', ')])
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .dimmer
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: 0
        background: rgba(0, 0, 0, 0.5)
        z-index: 1
    .modal
        position: absolute
        top: 10%
        width: 60%
        min-height: 350px
        left: 50%
        transform: translateX(-50%)
        background: #fff
        z-index: 2
        padding: 15px
        border-radius: 10px
        .title
            font-family: $ffp
            font-weight: bold
            color: $primary
            font-size: 16pt
        .grid
            display: grid
            grid-template-columns: 1fr 3fr
            .image 
                padding: 10px
                display: flex
                height: 300px
                align-items: center
                img
                    width: 100%
                    max-height: 250px
            .content
                padding: 20px
                .breadcrumb
                    color: #555
                    font-size: 9pt
                    font-family: $ff
                p.desc
                    font-family: $ff
                ul
                    padding: 0
                    list-style-type: none
                    .label
                        font-family: $ffp
                        font-weight: bold
                        font-size: 14pt
                        color: $primary
                        margin-bottom: 5px  
                    li
                        font-family: $ff
                        display:block
                        margin: -2px 0
                        border: 2px solid $primary
                        .key
                            background: $primary
                            width: 100px
                            padding: 5px
                            color: #fff
                            margin-right: 10px
                            font-weight: bold
                            text-transform: lowercase
                            text-align: right
                            display: inline-block
                        &:first-of-type
                            border-top-right-radius: 10px
                        &:last-of-type
                            border-bottom-right-radius: 10px
                .price
                    position: relative
                    top: 50px
                    font-family: $ff
                    float: left
                    font-weight: bold
                    font-size: 18pt
                    color: #999
                    &.available
                        color: $primary
                .link
                    text-decoration: none
                    font-family: $ffp
                    font-weight: bold
                    padding: 15px 45px
                    font-size: 18pt
                    // text-transform: lowercase
                    border-radius: 30px
                    float: right
                    position: relative
                    top: 30px
                    transition: .5s ease
                    color: $primary
                    background: transparent
                    border: 2px solid $primary
                    &:hover
                        color: #fff
                        background: $primary
                        border: 2px solid transparent
                        transition: .5s ease
</style>

