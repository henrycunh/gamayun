import axios from 'axios'

const TOKEN = '88c4f286bfa68445eb170e6d159b35f74e98847b'
const ADDR  = 'http://35.199.65.245' 


export default {

    data: {
        searchTerm: "",
        lastResults: [],
        resultsDone: true,
    },

    search(term){ 
        // Saves the last searched term
        this.data.searchTerm = term
        // Set results loading
        this.data.resultsDone = false 
        // Cleans the last results
        this.data.lastResults = []
        // Fetches the data
        axios.get(`${ADDR}/?token=${TOKEN}&title=${encodeURI(term)}`)
            .then( res => {
                // Checks for successful query
                if(res.data != "Error." && res.data){
                    // Choosing the first retailer
                    let queryResults = res.data
                    // Iterates through 
                    for(let result of queryResults){
                        // Request Address
                        let reqAddr = `${ADDR}/getproduct/?token=${TOKEN}&retailer=${result.retailer}&sku=${result.sku}&source=retailers`
                        axios.get(reqAddr)
                            .then( resDetails => {
                                this.data.lastResults.push(resDetails.data)
                            })
                            .then( () => {
                                if(this.data.lastResults.length == queryResults.length){
                                    this.data.resultsDone = true
                                }
                            })
                    }
                }
                // Else, sets results as done, sub flags 
                // as no results found through the empty
                // lastResults array
                this.data.resultsDone = true
            })
    },

    fetchTerm(){
        return this.data.searchTerm
    }

}