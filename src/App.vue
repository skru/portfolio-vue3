<script>
import Nav from "@/components/Nav.vue"
import Hero from "@/components/Hero.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Nav, 
    Hero, 
    Footer
  },
  data() {
    return {}
  },
  created: function() {
    window.addEventListener('resize', this.calculateVh);
    window.addEventListener('orientationchange', this.calculateVh);
  },
  destroyed: function() {
    window.removeEventListener('resize', this.calculateVh);
    window.removeEventListener('orientationchange', this.calculateVh);
  },
  mounted() {
    this.calculateVh();
  },
  methods: {
    calculateVh() {
      // layout requires css vh to always be correct. Not relying on CSS 
      var vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', vh + 'px');
    }
  }
}
</script>

<template>
  <div class="columns m-0">
    <div class="column p-0 is-hidden-mobile">
      <Hero size="is-fullheight"/>
    </div> 
    <div class="column p-0" id="page-wrapper">
      <div id="page-content">
        <Nav class="is-hidden-mobile"/>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
      <Nav class="is-hidden-tablet"/>
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/bulma-variables.scss";
#page-wrapper {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: var(--vh);
  scroll-snap-type: y proximity;
}
#page-content {
  flex: 1;
  background: $light;
}
</style>