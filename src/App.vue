<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home.vue"

export default {
  name: 'app',
  components: {
      Home
  },
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300')
  @import url('https://fonts.googleapis.com/css?family=Dosis')
  @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css')
  @import url('../node_modules/perfect-scrollbar/css/perfect-scrollbar.css')
  body
    margin: 0
    overflow: hidden

</style>
