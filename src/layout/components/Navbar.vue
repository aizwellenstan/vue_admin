<template>
  <div :class="[isLogin ? 'navbar-locked': 'navbar']">
    <!-- <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />  -->
    <!-- <router-link to="/"> -->
    <router-link v-if="isLogin" to="/admin/myaccount/accountinf">
      <img src="../../assets/img/img_logo_nadiID_1.png" class="idlogo">
    </router-link>
    <router-link v-else to="/">
      <img src="../../assets/img/img_logo_nadi_1_w.png" class="logo">
    </router-link>
    <!-- <div
        :key="index"
        v-for="(item, index) in nav"
        style="display: inline-block; color: white; padding-left:20px"
        @click="routerLink(index, item.path)"
    >
    <a href=
    '{{ item.title}}'
      class="text-grey-1"
      :class="navIndex === index ? 'active' : 'item-cn'"
      >{{ item.title }}</a>
    </div> -->
    <div style="display: inline-block; color: white; padding-left:20px">
      <ul v-if="!isLogin">
        <li
          v-for="(item, index) in items"
          :key="index"
          style="display: inline-block; padding-left: 30px"
        >
          <a :href="item.url">{{ item.text }}</a>
          <!-- <a v-bind:href="item.url">{{ item.text }}</a> -->
        </li>
      </ul>
    </div>
    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" style="padding-top:10px" />

        <error-log class="errLog-container right-menu-item hover-effect" />

        <!-- <screenfull id="screenfull" class="right-menu-item hover-effect" /> -->

        <!-- <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->

      </template>
      <div v-if="isLogin" class="header-search right-menu-item">
        <img src="../../assets/img/bell.png" style="width:26px; height:45px; padding-top:23px;">
      </div>

      <div v-if="isLogin" class="header-search right-menu-item" />

      <div v-if="isLogin" class="header-search right-menu-item" style="width:26px; height:10px;">
        <notification-bell
          :size="25"
          :count="1"
          upper-limit="50"
          counter-location="upperRight"
          counter-style="roundRectangle"
          counter-background-color="#FF0000"
          counter-text-color="#FFFFFF"
          icon-color="#ffffff"
        />
      </div>
      <div v-if="isLogin" class="header-search right-menu-item">
        <img src="../../assets/img/items.png" style="width:26px; height:45px; padding-top:23px;">
      </div>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <img src="../../assets/img/account-icon-navbar.png" class="user-avatar" style="height:41px; width:30px; padding-top:18px">
          <i v-if="isLogin" class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/profile/index">
            <el-dropdown-item>Profile</el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a> -->
          <router-link v-if="!isLogin" to="/register">
            <el-dropdown-item>Register</el-dropdown-item>
          </router-link>
          <router-link v-if="!isLogin" to="/login">
            <el-dropdown-item>Log In</el-dropdown-item>
          </router-link>
          <el-dropdown-item v-if="isLogin">
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
// import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
// import RouterBeforeEach from '@/router'

// import { getToken } from '@/utils/auth'
import NotificationBell from 'vue-notification-bell'

// import NotificationDropdown from './dropdown/NotificationDropdown'

export default {
  components: {
    // Breadcrumb,
    // Hamburger,
    ErrorLog,
    // Screenfull,
    // SizeSelect,
    Search,
    NotificationBell
    // NotificationDropdown
  },
  data() {
    return {
      isLogin: localStorage.getItem('token') === 'ImLogin',
      model: {},
      items: [
        {
          url: '#basicmodule',
          text: 'Basic Module'
        },
        {
          url: '#subsystem',
          text: 'Subsystem'
        }
      ],
      itemIndex: 0
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
  margin-left: 76px;
  margin-top: 20px;
}

.idlogo {
  width: 100px;
  height: 32px;
  margin-left: 76px;
  margin-top: 20px;
}

.navbar {
    background: #131313;
    position: relative;
    width: 100%;
    clear: both;
    overflow: hidden;
    padding: 18px 0;
    border-bottom: 1px solid #32d4d7;
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

.navbar-locked {
      background: #131313;
      position: fixed;
      width: 100%;
      top:0;
    clear: both;
    overflow: hidden;
    padding: 18px 0;
    border-bottom: 1px solid #32d4d7;
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

.active {
  width: calc(100%-210px)
}
</style>
