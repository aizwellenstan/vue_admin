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
        <search id="header-search" class="right-menu-item"  style="height: 40px!important"/>

        <error-log class="errLog-container right-menu-item hover-effect" />

        <!-- <screenfull id="screenfull" class="right-menu-item hover-effect" /> -->

        <!-- <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->

      </template>
      <!-- <div v-if="isLogin" class="header-search right-menu-item">
        <img src="../../assets/img/bell.png" style="width:26px; height:45px; padding-top:23px;">
      </div> -->
        <el-dropdown v-if="isLogin" class="right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <notification-bell
          :size="25"
          :count="getRemains()"
          upper-limit="50"
          counter-location="upperRight"
          counter-style="roundRectangle"
          counter-background-color="#FF0000"
          counter-text-color="#FFFFFF"
          icon-color="#ffffff"
        />
        </div>
        <el-dropdown-menu slot="dropdown">
          <li
              v-for="(alert, index) in alerts"
              :key="index"
          >
            <span style="padding-left: 10px; padding-right: 10px">{{ alert.text }}</span>
          </li>
        </el-dropdown-menu>
      </el-dropdown>
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

import NotificationDropdown from './dropdown/NotificationDropdown'

export default {
  components: {
    // Breadcrumb,
    // Hamburger,
    ErrorLog,
    // Screenfull,
    // SizeSelect,
    Search,
    NotificationBell,
    NotificationDropdown
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
      itemIndex: 0,
      alerts : [
        {
          text: 'alert1'
        },
        {
          text: 'alert2'
        },
        {
          text: 'alert3'
        },
        {
          text: 'alert4'
        },
        {
          text: 'alert5'
        },
      ],
      count: 0
    }
  },
  mounted() {
    isLogin= localStorage.getItem('token') === 'ImLogin'
	},
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      ['currentUser', 'isAuthenticated']
    ]),
  },
  methods: {
    getRemains: function() {  // 算出プロパティのgetter関数と同じ処理
			var count = 0;
			var todos = this.alerts;
			var length = todos.length;
			for(var i = 0; i < length; i++) {
				if(!todos[i].done) {
					count++;
				}
			}
			return count;
		},
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      localStorage.removeItem('token')
      await this.$store.dispatch('user/logout')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      document.location.href = '/'
      delete localStorage.token
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
    padding: 23px 0;
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

@media (min-width: 992px){
    .navbar-form {
        margin-top: 21px;
        margin-bottom: 21px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .md-toolbar-toggle{
      display: none;
    }


    .navbar-nav.navbar-right > li > .dropdown-menu:before{
        left: auto;
        right: 12px;
    }

    .navbar-nav.navbar-right > li > .dropdown-menu:after{
        left: auto;
        right: 12px;
    }

    .footer:not(.footer-big){
        nav > ul{
           li:first-child{
             margin-left: 0;
           }
        }
    }

    body > .navbar-collapse.collapse{
        display: none !important;
    }

    .card{
        form{
            [class*="col-"]{
                padding: 6px;
            }
            [class*="col-"]:first-child{
                padding-left: 15px;
            }
            [class*="col-"]:last-child{
                padding-right: 15px;
            }
        }
    }

    .sidebar{
        .navbar-form{
            display: none !important;
        }
        .nav-mobile-menu{
            display: none;
        }
    }
}

/*          Changes for small display      */

@media (max-width: 991px){
  .md-toolbar .md-collapse{
    display: none !important;
  }

  .main-panel > .content{
    padding-left: 0;
    padding-right: 0;
  }

    .sidebar{
        display: none;
        box-shadow: none;

        .sidebar-wrapper{
            padding-bottom: 60px;
        }

        .nav-mobile-menu{
            margin-top: 0;

            .md-field{
              width: auto;
              margin: 10px 36px 0;
            }

            .notification{
                float: left;
                line-height: 30px;
                margin-right: 8px;
            }
        }

        .dropdown-menu {
            position: static;
            float: none;
            width: auto;
            margin-top: 0;
            background-color: transparent;
            border: 0;
            display: none;
            -webkit-box-shadow: none;
            box-shadow: none;
        }

        .dropdown.open .dropdown-menu{
          display: block;
        }

        .dropdown{
          li:hover a{
          }
        }
    }

    html,
    body{
        overflow-x: hidden;
    }

    .menu-on-left{
        .nav-open &{
            .main-panel,
            .wrapper-full-page,
            .navbar-fixed > div{
            }
        }

        .main-panel{
            position: initial;
        }

        .sidebar,
        .off-canvas-sidebar{
            left: 0;
            right: auto;
        }

        #bodyClick{
            left: 260px;
            right: auto;
        }
    }

    .main-panel{
        width: 100%;
    }
    .navbar-transparent{
        padding-top: 15px;
        background-color: rgba(0, 0, 0, 0.45);
    }
    body,
    html{
        position: relative;
        overflow-x: hidden;
    }
    .navbar .container{
         left: 0;
          width: 100%;
         position: relative;
    }
    .navbar .navbar-collapse.collapse,
    .navbar .navbar-collapse.collapse.in,
    .navbar .navbar-collapse.collapsing{
        display: none !important;
    }

    .navbar-nav > li{
        float: none;
        position: relative;
        display: block;
    }

    .sidebar,
    .off-canvas-sidebar{
        position: fixed;
        display: block;
        top: 0;
        height: 100vh;
        width: 260px;
        right: 0;
        left: auto;
        z-index: 1032;
        visibility: visible;
        background-color: #9A9A9A;
        overflow-y: visible;
        border-top: none;
        text-align: left;
        padding-right: 0px;
        padding-left: 0;

        > ul {
            position: relative;
            z-index: 4;
            overflow-y:scroll;
            height: calc(100vh - 61px);
            width: 100%;
        }
        &::before{
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            display: block;
            content: "";
            z-index: 1;
        }

        .logo{
            position: relative;
            z-index: 4;
        }

        .navbar-form{
            margin: 10px 15px;
            float: none !important;
            padding-top: 1px;
            padding-bottom: 1px;
        }

        .table-responsive {
            width: 100%;
            margin-bottom: 15px;
            overflow-x: scroll;
            overflow-y: hidden;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            -webkit-overflow-scrolling: touch;
        }
    }

    .form-group{
        .form-control{
            font-size: 16px;
            height: 37px
        }
    }

    .navbar-form{
        .btn{
            position: absolute;
            top: 27px;
            right: 15px;
        }
    }

    .nav-open .navbar-collapse{
    }
    .nav-open .navbar .container{
        left: -250px;
    }
    .nav-open .main-panel{
        left: 0;
    }

    .nav-open .sidebar{
    }

    .nav-open{
        .off-canvas-sidebar,
        .sidebar{
        }
    }

    .close-layer{
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0;
        top: 0;
        left: auto;

        content: "";
        z-index: 9999;
        overflow-x: hidden;


        &.visible{
            opacity: 1;
        }
    }

    .navbar-toggle .icon-bar {
          display: block;
          position: relative;
          background: #fff;
          width: 24px;
          height: 2px;
          border-radius: 1px;
          margin: 0 auto;
    }

    .navbar-header .navbar-toggle {
        margin: 10px 15px 10px 0;
        width: 40px;
        height: 40px;
    }
    .bar1,
    .bar2,
    .bar3 {
      outline: 1px solid transparent;
    }


    .md-toolbar-toggle{
        .icon-bar:nth-child(2){
          top: 0px;
        }
        .icon-bar:nth-child(3){
          opacity: 1;
        }
        .icon-bar:nth-child(4){
          bottom: 0px;
        }

        &.toggled{
            .icon-bar:nth-child(1){
              top: 6px;
            }
            .icon-bar:nth-child(2){
              opacity: 0;
            }
            .icon-bar:nth-child(3){
              bottom: 6px;
            }
        }
    }

    @-webkit-keyframes fadeIn {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
    @-moz-keyframes fadeIn {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
    @keyframes fadeIn {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }

    .dropdown-menu .divider{
        background-color: rgba(229, 229, 229, 0.15);
    }

    .navbar-nav {
        margin: 1px 0;

        .open .dropdown-menu > li {
            & > a{
                padding: 15px 15px 5px 50px;
            }

            &:first-child > a{
                padding: 5px 15px 5px 50px;
            }

            &:last-child > a {
                padding: 15px 15px 25px 50px;
            }
        }
    }

    [class*="navbar-"] .navbar-nav {
        & > li > a,
        > li > a:hover,
        > li > a:focus,
        .active > a,
        .active > a:hover,
        .active > a:focus,
        .open .dropdown-menu > li > a,
        .open .dropdown-menu > li > a:hover,
        .open .dropdown-menu > li > a:focus,
        .navbar-nav .open .dropdown-menu > li > a:active {
            color: white;
        }

        & > li > a,
        > li > a:hover,
        > li > a:focus,
        .open .dropdown-menu > li > a,
        .open .dropdown-menu > li > a:hover,
        .open .dropdown-menu > li > a:focus{
            opacity: .7;
            background: transparent;
        }

        &.navbar-nav .open .dropdown-menu > li > a:active {
            opacity: 1;
        }

        & .dropdown > a{
            &:hover .caret {
                border-bottom-color: #777;
                border-top-color: #777;
            }
            &:active .caret {
                border-bottom-color: white;
                border-top-color: white;
            }
        }

    }

    .dropdown-menu {
        display: none;
    }
    .navbar-fixed-top {
        -webkit-backface-visibility: hidden;
    }
    #bodyClick {
        height: 100%;
        width: 100%;
        position: fixed;
        opacity: 0;
        top: 0;
        left: auto;
        right: 260px;
        content: "";
        z-index: 9999;
        overflow-x: hidden;
    }

    .social-line .btn{
    }
    .subscribe-line .form-control{
    }
    .social-line.pull-right{
        float: none;
    }
    .footer:not(.footer-big) nav > ul li{
        float: none;
    }
    .social-area.pull-right{
        float: none !important;
    }
    .form-control + .form-control-feedback{
        margin-top: -8px;
    }
    .navbar-toggle:hover,.navbar-toggle:focus {
        background-color: transparent !important;
    }
    .btn.dropdown-toggle{
        margin-bottom: 0;
    }
    .media-post .author{
        width: 20%;
        float: none !important;
        display: block;
        margin: 0 auto 10px;
    }
    .media-post .media-body{
        width: 100%;
    }

    .navbar-collapse.collapse{
        height: 100% !important;
    }
    .navbar-collapse.collapse.in {
        display: block;
    }
    .navbar-header .collapse, .navbar-toggle {
        display:block !important;
    }
    .navbar-header {
        float:none;
    }
    .navbar-collapse{
        .nav p{
            margin: 0;
        }

        [class^="pe-7s-"]{
            float: left;
            font-size: 20px;
            margin-right: 10px;
        }
    }
}

@media (max-width: 768px){
  .footer .container{
    justify-content: unset;
    display: block;

    nav{
      display: block;
    }

    .copyright{
      float: right;
    }
  }

  .hidden-sm{
    display: none !important;
  }
}
@media (min-width: 768px){
  .hidden-lg,
  .hidden-md{
    display: none !important;
  }
}

@media screen and (min-width: 768px){
  .block-md{
    display: block !important;
  }
}



@media (max-width: 480px), (max-width: 767px){
    .form-group{
        .form-control{
            width: 83%;
        }
    }

    .navbar-form{
        .form-group{
            margin-bottom: 0;
        }
    }
}

@media (min-width: 992px){
    .table-full-width{
        margin-left: -20px;
        margin-right: -20px;
    }
    .table-responsive{
        overflow: visible;
    }

}

@media screen and (max-width: 576px) {
  .tim-typo{
    padding-left: 11% !important;

    .tim-note{
      bottom: -25px !important;
    }
  }
}

</style>
