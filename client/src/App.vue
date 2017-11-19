<template>
  <div id="app">
    <page-header />
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
.at-menu--dark {
  margin-bottom: 1rem;
}
.at-menu--dark .at-menu__item .at-menu__item-link::after {
  width: 100%;
}

#app {
  margin: 0;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
