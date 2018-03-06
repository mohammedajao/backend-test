<template>
  <div>
    <at-menu v-if="!$store.state.isUserLoggedIn" theme="dark" mode="horizontal">
      <at-menu-item name="0" disabled><i class="icon icon-box"></i>Studentern</at-menu-item>
      <span class="at-horizontal-menu-item__group">
        <at-menu-item name="1"><router-link to="/"><i class="icon icon-home"></i>Home</router-link></at-menu-item>
        <at-menu-item name="2"><i class="icon icon-home"></i>About</at-menu-item>
        <at-menu-item name="3"><i class="icon icon-home"></i>Contact</at-menu-item>
        <at-menu-item name="4"><router-link to="/login"><i class="icon icon-log-in"></i>Login</router-link></at-menu-item>
        <at-menu-item name="5"><router-link to="/register"><i class="icon icon-user-plus"></i>Join Us</router-link></at-menu-item>
        <span class="at-input">
          <input type="email" placeholder="Email Address" v-model="email" class="header-input at-input__original"></input>
        </span>
        <span class="at-input">
          <input type="password" placeholder="Password" v-model="password" class="header-input at-input__original"></input>
        </span>
        <at-button type="primary" @click="login" hollow>Log In</at-button>
      </span>
      <at-button class="at-btn-menu float float-right" icon="icon-menu" size="large" hollow></at-button>
    </at-menu>


    <at-menu v-else-if="$store.state.isUserLoggedIn" theme="dark" mode="inline">
      <at-menu-item name="0" disabled><i class="icon icon-box"></i>Studentern</at-menu-item>
      <span class="at-input" id="header-search">
          <input placeholder="Search" class="header-input at-input__original header-search" icon="search">
            <i class="at-input__icon icon icon-search"></i>
          </input>
      </span>
      <at-button @click="logout" class="float float-right" type="primary" hollow>Log Out</at-button>
    </at-menu>
    <at-menu theme="dark" mode="inline" class="at-sidemenu">
      <at-menu-item name="1"><i class="icon icon-home"></i>Home</at-menu-item>
      <at-menu-item name="2"><i class="icon icon-box"></i>About</at-menu-item>
      <at-menu-item name="3"><i class="icon icon-box"></i>Contact</at-menu-item>
      <at-menu-item name="4"><i class="icon icon-log-in"></i>Login</at-menu-item>
      <at-menu-item name="5"><i class="icon icon-user-plus"></i>Register</at-menu-item>
    </at-menu>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
        this.$Message.error(this.error)
      }
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style lang="css" scoped>

.at-menu {
  margin-bottom: 0;
}

.header-input {
  max-width: 10rem;
  display: inline-block;
}

.header-search {
  max-width: 100%;
  display: block;
  margin: 0;
  padding: 6px 24px;
}
#header-search {
  float: left;
  margin: 0.5rem 0;
  width: 20%;
}

.icon-search {
  left: 0;
  right: auto;
  margin: 0px 6px 0px 3px;
}

.float {
  margin: 0.5rem 0;
  margin-right: 1rem;
}

.float-left {float: left;}
.float-right {float: right;}

@media(max-width: 1200px){
  .at-horizontal-menu-item__group { display: none; }
}

@media (min-width: 1200px) {
  .at-btn-menu { display: none !important; }
}

.at-btn-menu {
  border-style: none;
  color: #ADD8E6;
  margin: 0;
}

.at-btn-menu:hover { color: white; }

.at-sidemenu {
  margin: 0;
  display: inline-block;
  float: left;
  height: 100vh;
  width: 0 !important;
}

.at-sidemenu > li {
  width: 100%;
}
</style>
