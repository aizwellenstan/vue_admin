<template>
  <div class="hello">
    <d-player id="player" ref="player" :video="video" autoplay="true" @play="play" />
  </div>
</template>

<script>
import VueDPlayer from './VueDplayerHls.vue'

export default {
  components: {
    'd-player': VueDPlayer
  },
  data() {
    return {
      video: {
        url: 'http://127.0.0.1:8080/stream/192-168-1-131-axis-media-media-amp/index.m3u8',
        type: 'hls'
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
