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
}
</script>

<template>
  <div class="columns m-0">
    <RouterLink to="/" class="column p-0 is-hidden-mobile">
      <Hero size="is-fullheight"/>
    </RouterLink> 
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

<style scoped>
#page-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#page-content {
  flex: 1;
}
</style>