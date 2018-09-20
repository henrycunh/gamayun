// Module
export default {
    // Store Schema
    state: {
        tab: 'home',
        product: null
    },

    /**
     * Checks for the current tab
     * @param {*} tab Tab to be checked
     */
    isTab(tab){
        return this.state.tab == tab
    },

    /**
     * Switches to a tab
     * @param {*} tab Tab specified to be switched to
     */
    toTab(tab){
        this.state.tab = tab
    },

    /**
     * If a product data is informed, sets the current
     * to it, and returns the current in every case
     * @param {*} productData Product to be stored
     */
    currentProduct(productData){
        if(productData)
            this.state.product = productData
        return this.state.product
    },
    
    /**
     * Resets the current product data
     */
    removeProduct(){
        this.state.product = null
    }
}