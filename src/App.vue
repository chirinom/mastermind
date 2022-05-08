<template>
  <div id="app">
    <Mastermind/>
  </div>
</template>

<script>
import Mastermind from './components/Mastermind.vue'

export default {
  name: 'App',
  components: {
    Mastermind
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #efefef;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 90px;
}
</style>
