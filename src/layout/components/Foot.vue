<template>
  <div :class="[isLogin ? 'footer-locked': 'footer']">

    <div class="copyright">
      <img src="../../assets/img/img_logo_nadi_1.png" class="logo">
      <p>
        Copyright©2019NADITechnologies &nbsp;
        <router-link to="/legal" class="light-blue">
          Legal
        </router-link>
        &nbsp;
        <router-link to="/privacypolicy" class="light-blue">
          PrivacyPolicy
        </router-link>
        &nbsp;
        <router-link to="/cookies" class="light-blue">
          Cookies
        </router-link>
        <br>
        <br>
        "NADI", NADI logos, and other NADI trademarks are trademarks or registered trademarks of NADI
        or its affiliates in the U.S. and elsewhere (more info here). Other names or brands
        are trademarks of their respective owners.
      </p>
    </div>
    <div class="lang">
      Language English
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isLogin: localStorage.getItem('token') === 'ImLogin'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      ['currentUser', 'isAuthenticated']
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      localStorage.removeItem('token')
      await this.$store.dispatch('user/logout')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      document.location.href = '/'
    },
    /**
    * Router
    * @param index
    * @param link
    */
    routerLink(index, path) {
      this.navIndex = index
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 63px;
  height: 32px;
  margin-top: 20px;
}

.footer {
  height: 151px;
  overflow: hidden;
  position: relative;
  position: relative;
  // bottom: 0; /* Position the navbar at the top of the page */
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

.footer-locked {
  height: 151px;
  overflow: hidden;
  position: relative;
  position: fixed;
  bottom: 0; /* Position the navbar at the top of the page */
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

.light-blue {
  color: #32d4d7
}

.copyright {
  padding-left:81px;
  display: inline-block;
}

.lang {
  padding-left:81px;
  display: inline-block;
}
</style>
