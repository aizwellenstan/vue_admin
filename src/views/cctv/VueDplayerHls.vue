<template>
  <div style="height:360px!important">
    <div class="dplayer" />
  </div>
</template>

<script>
require('../../../node_modules/dplayer/dist/DPlayer.min.css')
import DPlayer from 'dplayer'
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: '#FADFA3'
    },
    loop: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: 'ja'
    },
    screenshot: {
      type: Boolean,
      default: false
    },
    hotkey: {
      type: Boolean,
      default: true
    },
    preload: {
      type: String,
      default: 'true'
    },
    logo: {
      type: String,
      default: ''
    },
    video: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.url === 'string'
      }
    }
  },
  data() {
    return {
      dp: null
    }
  },
  mounted() {
    const player = this.dp = new DPlayer({
      element: this.$el,
      autoplay: true,
      theme: this.theme,
      loop: this.loop,
      lang: this.lang,
      screenshot: this.screenshot,
      hotkey: this.hotkey,
      preload: true,
      logo: this.logo,
      video: {
        url: this.video.url,
        pic: this.video.pic,
        type: this.video.type
      },
      live: true,
      fullScreen: 'web',
    })
    player.on('play', () => {
      this.$emit('play')
      console.log('play')
    })
    player.on('pause', () => {
      this.$emit('pause')
    })
    player.on('canplay', () => {
      this.$emit('canplay')
    })
    player.on('playing', () => {
      this.$emit('playing')
    })
    player.on('ended', () => {
      this.$emit('ended')
    })
    player.on('error', () => {
      this.$emit('error')
    })
  }
}
</script>
