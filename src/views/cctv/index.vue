<template>
  <div class="liveView">
    <video-player ref="videoPlayer" class="vjs-custom-skin" :options="playerOptions" @ready="onPlayerReadied" @timeupdate="onTimeupdate" />
  </div>
</template>

<script>
// import Switcher from './components/Switcher'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  components: {
    // Switcher
  },
  data() {
    return {
      initialized: false,
      currentTech: '',
      streams: {
        hls: ''
      },
      playerOptions: {
        height: '360px',
        overNative: true,
        autoplay: true,
        controls: true,
        techOrder: ['html5'],
        sourceOrder: true,
        html5: { hls: { withCredentials: false }},
        sources: [
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: 'http://192.168.1.146:8080/stream/192-168-1-200-user-admin-password-channel-2-stream-0-sdp/index.m3u8'
          }
        ]
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    currentStream() {
      return this.currentTech === 'Flash' ? 'RTMP' : 'HLS'
    }
  },
  methods: {
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true
        this.currentTech = this.player.techName_
      }
    },
    // record current time
    onTimeupdate(e) {
      console.log('currentTime', e.cache_.currentTime)
    },
    enterStream() {
      this.playerOptions.sources[1].src = this.streams.hls
      this.playerOptions.sources[0].src = this.streams.rtmp
      this.playerOptions.autoplay = true
    },
    changeTech() {
      if (this.currentTech === 'Html5') {
        this.playerOptions.techOrder = ['html5']
      } else if (this.currentTech === 'Flash') {
        this.playerOptions.techOrder = ['flash']
      }
      this.playerOptions.autoplay = true
    }
  }
}
</script>

<style scoped>
.liveView {
  position: relative;
}

.selectWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
  margin: 20px;
  vertical-align: baseline;
}

.inputWrapper {
  width: 500px;
  margin: 0 auto;
}

.buttonWrapper {
  text-align: center;
}
</style>
