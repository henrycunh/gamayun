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
  @import url('https://fonts.googleapis.com/css?family=Montserrat')
  @import url('https://fonts.googleapis.com/css?family=PT+Sans')
  @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
  
  body
    margin: 0
    overflow: hidden

        

</style>
