<script>
import PageLinks from "@/components/PageLinks.vue"
import AppView from "@/components/AppView.vue"
import Overlay from "@/components/Overlay.vue"
import FMSynth from "@/components/apps/FMSynth.vue"

export default {
  components: {
    PageLinks,
    AppView,
    Overlay,
    FMSynth
  },
  data(){
    return {
      links: [
          { type: "github", link: "https://github.com/skru/FM_synth" },
      ],
      active: true,
      title: "WARNING !",
      warning: "This page can potentially produce very loud sounds. It is strongly recommended to turn headphones/speakers to low if you want to interact with the synthesizer."
    }
  }
}
</script>

<template>
  <div>
    <div class="content">
      <h1 class="title">
        FM Synthesizer
      </h1>
      <p class="subtitle">2015</p>
      <PageLinks :links="links"/>
      <hr>
      <p>
        Simple frequency modulation synthesiser using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">Web Audio API.</a>
        The <a href="https://en.wikipedia.org/wiki/Oscilloscope">oscilloscope</a> is a HTML canvas and there are no dependencies. 
      </p>
      <p>
        The look is pretty awful now I look back at it,   
        looking forward to writing a new version and adding another modulator. It was also an Android app for several years and had approx 1500 downloads (<a href="https://cordova.apache.org/">Cordova/PhoneGap</a>).
      </p>
    </div>

    <AppView>
      <FMSynth/>
    </AppView>
    
    <Overlay>
      <FMSynth/>
    </Overlay>

    
  </div>
</template>
