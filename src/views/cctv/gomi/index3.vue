<template>
  <div>
    <iframe srcdoc="<video id=&quot;mse&quot; class=&quot;mse&quot; muted width=&quot;1080&quot; height=&quot;720&quot;></video>" :src="src" width="1080px" height="720px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'http://127.0.0.1:8080'
    }
  }
}
</script>
