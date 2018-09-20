export default {
    state: {
        tab: 'home'
    },

    isTab(tab){
        return this.state.tab == tab
    },

    toTab(tab){
        this.state.tab = tab
    }
    
}