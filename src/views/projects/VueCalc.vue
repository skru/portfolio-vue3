<script>
import PageLinks from "@/components/PageLinks.vue"
import AppView from "@/components/AppView.vue"
import Overlay from "@/components/Overlay.vue"
import VueCalc from "@/components/apps/VueCalc.vue"

export default {
  components: {
    PageLinks,
    AppView,
    Overlay,
    VueCalc
  },
  data(){
    return {
      links: [
          { type: "github", link: "https://github.com/skru/VueCalc" },
      ],
    }
  }
}
</script>

<template>
  <div>
    <div class="content">
      <h1 class="title">
        Vue Calculator
      </h1>
      <p class="subtitle">2020</p>
      <PageLinks :links="links"/>
      <hr>
      <p>
        Job Application Project, simple calculator with no libraries.
      </p>
    </div>

    <AppView>
      <VueCalc/>
    </AppView>
    
    <Overlay>
      <VueCalc/>
    </Overlay>

  </div>
</template>
