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

.at-menu--horizontal .at-menu__item .at-menu__item-link::after {
  width: 100%;
  height: 4px;
}

.at-sidemenu .at-menu__item .at-menu__item-link::after {
  height: 100%;
  right: 0;
  left: auto;
}

.at-btn-menu .at-btn__icon{
  font-size: 21px;
  margin: 0;
}

.at-card {
  min-width: 200px;
}
#app {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
