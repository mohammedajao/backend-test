<template>
  <div>
    <div class="row at-row no-gutter flex-center">
      <div class="col-md-4">
        <at-card>
          <h4 slot="title">Registration</h4>
          <div>
            <at-input type="email" name="email" v-model="email" placeholder="Email Address" size="small">
              <template slot="prepend">
                <i class="icon icon-mail"></i>
                &nbsp;
                <span>Email</span>
              </template>
            </at-input>
            <at-input type="password" name="password" v-model="password" placeholder="Password" size="small">
              <template slot="prepend">
                <i class="icon icon-lock"></i>
                &nbsp;
                <span>Password</span>
              </template>
            </at-input>
            <br/>
            <at-button @click="register" hollow><i class="icon icon-log-in"></i>&nbsp;Register</at-button>
          </div>
        </at-card>
      </div>
    </div>
    <br/>
    <div class="error" v-html="error" />
    <br/>
    <!-- <button @click="register">Register</button> -->
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
</style>
