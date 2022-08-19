<template>
  <CardHolder msg="Card Holder message"/>
</template>

<script>
import CardHolder from './components/CardHolder.vue';

export default {
  name: 'App',
  components: {
    CardHolder,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
