<script>
const synth = new URL('../../../fmsynth.html', import.meta.url).href
export default {
  data(){
    return {
      synth: synth,
    }
  }
}
</script>

<template>
    <iframe :src="synth" id="synth-iframe"></iframe>
</template>

<style scoped>
#synth-iframe {
    width: 100%;
    height: 100%
}
</style>