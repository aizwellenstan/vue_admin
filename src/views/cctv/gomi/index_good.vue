<template>
  <div>
    <iframe :src="src" width="1080px" height="720px" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      src: 'http://127.0.0.1:8080'
    }
  }
}
</script>
