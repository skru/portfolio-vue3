<script>
import PageLinks from "@/components/PageLinks.vue"
import Overlay from "@/components/Overlay.vue"
import VueCalc from "@/components/apps/VueCalc.vue"

export default {
  components: {
    PageLinks,
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
    <div class="content mb-6">
      <h1 class="title">
        Vue Calculator
      </h1>
      <PageLinks :links="links"/>
      <hr>
      <p>
        Job Application Project, simple calculator with no libraries.
      </p>
    </div>
    <div class="is-hidden-tablet from-right py-6 heighter">
      <VueCalc class="i"/>
    </div>
    
    <Overlay class="is-hidden-mobile from-top">
      <VueCalc/>
    </Overlay>
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/sass/helpers/color.sass";
@import "@/assets/scss/project-variables";

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.from-top {
  animation: 1s ease-out 0s 1 slideInFromTop;
}

.from-right {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.is-overlay{
  background: $primary;
  width:50%;
}

.heighter {
  scroll-snap-align: start;
  max-width: 100%;
  height: var(--vh)
}

</style>