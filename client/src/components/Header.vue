<template>
  <at-menu v-if="!$store.state.isUserLoggedIn" theme="dark" mode="horizontal" inline-collapsed="true" active-name="0" router>
    <at-menu-item name="0" disabled><i class="icon icon-box"></i>Studentern</at-menu-item>
    <at-menu-item :to="{name: 'Hello' }" name="1"><i class="icon icon-home"></i>Home</at-menu-item>
    <at-menu-item name="2"><i class="icon icon-home"></i>About</at-menu-item>
    <at-menu-item name="3"><i class="icon icon-home"></i>Contact</at-menu-item>
    <at-menu-item :to="{name: 'login' }" name="4"><i class="icon icon-log-in"></i>Login</at-menu-item>
    <at-menu-item :to="{name: 'register' }" name="5"><i class="icon icon-log-in"></i>Join Us</at-menu-item>
  </at-menu>
  <at-menu v-else-if="$store.state.isUserLoggedIn" theme="dark" mode="horizontal">
    <at-menu-item name="0" disabled><i class="icon icon-box"></i>Studentern</at-menu-item>
  </at-menu>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
