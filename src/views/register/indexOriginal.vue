<template>
  <div>
    <div class="navbar">
      <router-link to="/">
        <img src="../../assets/img/img_logo_nadi_1.png" class="logo">
      </router-link>
    </div>
    <!-- <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div> -->
    <!-- <form v-if="!signingUp" @submit.prevent="signup">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="user.username"
          type="text"
          class="form-control"
          id="username"
          aria-describedby="usernameHelp"
          placeholder="Enter a username" required>
        <h5 id="usernameHelp" class="form-text text-muted">
         Username must be longer than 2 characters and shorter than 30.
         Username can only contain alphanumeric characters and under_scores.
        </h5>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="password">Password</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            id="password"
            aria-describedby="passwordHelp"
            placeholder="Password" required>
          <h5 id="passwordHelp" class="form-text text-muted">
          Password must be 10 or more characters long.
          </h5>
        </div>
        <div class="form-group col-md-6">
          <label for="confirmPassword">Confirm Password</label>
          <input
            v-model="user.confirmPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
            aria-describedby="confirmPasswordHelp"
            placeholder="Password" required>
          <h5 id="confirmPasswordHelp" class="form-text text-muted">
          Please confirm your password.
          </h5>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form> -->
    <div class="form">
      <span class="title">Create a NADI ID</span>
      <br>
      <br>
      If you already have a NADI ID, please <router-link to="/login" class="lightblue">sign in here</router-link>.
      <br>
      <br>
      <div class="filter-container" hight="calc(100%-72px)">
        <div class="filter-item el-input el-input--medium" style="width: 571px;">
          <span class="tag">Username</span><br>
          <input v-model="user.username" type="text" autocomplete="off" class="el-input__inner" required>
        </div>
        <div class="filter-item el-input el-input--medium" style="width: 571px; padding-left:28px">
          <span class="tag">Email</span><br>
          <input v-model="model.email" type="text" autocomplete="off" class="el-input__inner">
        </div>
      </div>

      <div class="filter-container" style="padding-top: 40px">
        <div class="filter-item el-input el-input--medium" style="width: 571px;">
          <span class="tag">Password</span><br>
          <input v-model="model.password" type="text" autocomplete="off" class="el-input__inner">
        </div>
        <div class="filter-item el-input el-input--medium" style="width: 571px; padding-left:28px">
          <span class="tag">Confirm Password</span><br>
          <input v-model="model.comfirmPassword" type="text" autocomplete="off" class="el-input__inner">
        </div>
      </div>
      <div class="filter-container" style="padding-top: 40px">
        <div class="filter-item el-input el-input--medium" style="width: 571px;">
          <span class="tag">Fullname</span><br>
          <input type="text" autocomplete="off" class="el-input__inner">
        </div>
      </div>
      <br>
      <input type="checkbox"> I agree to the NADI
      <router-link to="/termsofuse" class="lightblue">Terms of Use</router-link> and
      <router-link to="/privacy" class="lightblue">Privacy Policy</router-link>
      <br>
      <input type="checkbox">
      I understand that by checking this box, I am agreeing to recive<br>
      &nbsp;&nbsp;&nbsp;&nbsp;promotional materials from NADI
      <div style="padding-top: 21px">
        <a><button class="btn-cyan" @click='post'>Create a Nadi ID</button></a>
        <router-link to="/login">
          <button class="btn-white" type="submit">Already have a Nadi ID?</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from 'joi';

const SIGNUP_URL = 'http://localhost:5000/auth/signup';



export default {
  data: () => ({
    signingUp: false,
    errorMessage: '',
    user: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  }),
  watch: {
    user: {
      handler() {
        this.errorMessage = '';
      },
      deep: true,
    },
  },
  methods: {
    signup() {
      this.errorMessage = '';
      if (this.validUser()) {
        const body = {
          username: this.user.username,
          password: this.user.password,
        };
        this.signingUp = true;
        fetch(SIGNUP_URL, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
          },
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }).then((result) => {
          localStorage.token = result.token;
          setTimeout(() => {
            this.signingUp = false;
            this.$router.push('/login');
          }, 1000);
        }).catch((error) => {
          setTimeout(() => {
            this.signingUp = false;
            this.errorMessage = error.message;
          }, 1000);
        });
      }
    },
    validUser() {
      if (this.user.password !== this.user.confirmPassword) {
        this.errorMessage = 'Passwords must match. 🙈';
        return false;
      }

      const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30)
    .required(),
  password: Joi.string().min(4).max(30).required(),
  confirmPassword: Joi.string().min(4).max(30).required(),
});

      const result = Joi.validate(this.user, schema);
      if (result.error === null) {
        return true;
      }

      if (result.error.message.includes('username')) {
        this.errorMessage = 'Username is invalid. 😭';
      } else {
        this.errorMessage = 'Password is invalid. 🙈';
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 63px;
  height: 32px;
  margin-left: 76px;
  margin-top: 20px;
}
.navbar {
  height: 72px;
  overflow: hidden;
  position: relative;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  z-index: 1001;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
.form {
  margin-top:72px;
  padding-top:68px;
  padding-left:377px;
  padding-bottom: 0;
  height: calc(100%-72px)
}
.lightblue {
  color: #32d4d7
}
.tag {
  font-size: 16px;
  color: #666
}
.title {
  font-size: 28px
}
.btn-cyan {
  background-color: #32d4d7;
  color: #fff;
  width: 176px;
  height: 40px
}
.btn-white {
  background-color: #fff;
  color: #32d4d7;
  width: 223px;
  height: 40px
}
</style>
