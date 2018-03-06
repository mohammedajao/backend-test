<template>
  <div class="registration-container">
    <div class="row at-row no-gutter flex-center">
      <div class="col-md-4">
        <at-card>
          <h4 slot="title">Registration</h4>
          <div>
            <form name="studentern-login-form" autocomplete="off">
              <at-input type="email" name="email" v-model="email" placeholder="Email Address" size="small">
                <template slot="prepend">
                  <i class="icon icon-mail"></i>
                  &nbsp;
                  <span>Email</span>
                </template>
              </at-input>
              <at-input type="password" name="password" v-model="password" autocomplete="new-password" placeholder="Password" size="small">
                <template slot="prepend">
                  <i class="icon icon-lock"></i>
                  &nbsp;
                  <span>Password</span>
                </template>
              </at-input>
            </form>
            <br/>
            <at-button @click="register" hollow><i class="icon icon-user-plus"></i>&nbsp;Register</at-button>
          </div>
        </at-card>
        <div class="error" v-html="error" />
      </div>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dipsatch('setToken', response.data.token)
        this.$store.dispatch('setToken', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}

.registration-container {
  margin-top: 1rem;
}
</style>
