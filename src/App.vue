<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: 'app',
  components: {
      Home
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300')
  @import url('https://fonts.googleapis.com/css?family=Dosis')
  @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
  @import url('https://raw.githubusercontent.com/daneden/animate.css/master/animate.css')
  
  body
    margin: 0
    overflow: hidden

        

</style>
