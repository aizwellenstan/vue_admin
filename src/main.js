import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

import MarqueeText from 'vue-marquee-text-component'

Vue.component('marquee-text', MarqueeText)

import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'videojs-contrib-hls'

Vue.use(VideoPlayer)

// import VideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import videojs from 'video.js'
// window.Hls = require('hls.js')

// window.videojs = videojs
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
// Vue.use(VideoPlayer)

// import VVideo from 'vue-videojs'
// // use global
// Vue.use(VVideo)

// import 'video.js/dist/video-js.css'
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import 'videojs-flash'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
// import 'videojs-contrib-hls'

// Vue.use(VueVideoPlayer)
// import { videoPlayer } from 'vue-video-player'
// Vue.component('video-player', videoPlayer)

// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:8080'
// }))

// import axios from 'axios'
// Vue.use(axios)
// import jQuery from 'jquery'
// global.jquery = jQuery
// global.$ = jQuery
// window.$ = window.jQuery = require('jquery')

// Vue.use(jQuery)
// import videojs from 'video.js'
//   window.videojs = videojs

//   // hls plugin for videojs6
//   require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
