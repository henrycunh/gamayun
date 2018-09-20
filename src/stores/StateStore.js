export default {
    state: {
        tab: 'home',
        product: null
    },

    isTab(tab){
        return this.state.tab == tab
    },

    toTab(tab){
        this.state.tab = tab
    },

    currentProduct(productData){
        if(productData)
            this.state.product = productData
        return this.state.product
    },

    removeProduct(){
        this.state.product = null
    }
}