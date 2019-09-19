<template>
  <section>
    <h1>Login</h1>
    <div v-if="loggingIn" />
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <form v-if="!loggingIn" @submit.prevent="login()">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="user.username"
          type="text"
          class="form-control"
          aria-describedby="usernameHelp"
          placeholder="Enter a username"
          required
        >
        <h5 id="usernameHelp" class="form-text text-muted">
          Enter your username to login.
        </h5>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="user.password"
          type="password"
          class="form-control"
          aria-describedby="passwordHelp"
          placeholder="Enter a password"
          required
        >
        <h5 id="passwordHelp" class="form-text text-muted">
          Enter your password to login.
        </h5>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

    USER: test1
    PWD: Test1111
  </section>
</template>

<script>
import Joi from 'joi'
// const LOGIN_URL = 'http://localhost:5000/auth/login';
const LOGIN_URL = 'http://192.168.1.77:7778/colddata/authorization/'
const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30)
    .required(),
  password: Joi.string().trim().min(8).required()
})
export default {
  data: () => ({
    errorMessage: '',
    loggingIn: false,
    user: {
      username: '',
      password: ''
    }
  }),
  methods: {
    login() {
      this.errorMessage = ''
      if (this.validUser()) {
        this.loggingIn = true
        // const body = {
        //   username: this.user.username,
        //   password: this.user.password
        // }
        fetch(LOGIN_URL, {
          method: 'get',
          headers: {
            'content-type': 'application/json',
            'US': this.user.username,
            'PS': this.user.password
          }
          // body: JSON.stringify(body),
        }).then((response) => {
          if (response.ok) {
            return response.json()
          }
          return response.json().then((error) => {
            throw new Error(error.message)
          })
        }).then(() => {
          this.$store.dispatch('user/login', this.user)
          // .then(() => {
          localStorage.setItem('token', 'ImLogin')
          // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.$router.push({ path: this.redirect })
          this.loading = false
          // })
          // .catch(() => {
          //   this.loading = false
          // })
          // localStorage.token = result.token;
          setTimeout(() => {
            this.loggingIn = false
            this.$router.push('/')
          }, 1000)
        }).catch((error) => {
          setTimeout(() => {
            this.loggingIn = false
            this.errorMessage = error.message
          }, 1000)
        })
      }
    },
    validUser() {
      const result = Joi.validate(this.user, schema)
      if (result.error === null) {
        return true
      }
      if (result.error.message.includes('username')) {
        this.errorMessage = 'Username is invalid. 😭'
      } else {
        this.errorMessage = 'Password is invalid. 🙈'
      }
      return false
    }
  }
}
</script>

<style>
</style>
