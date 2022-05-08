<script>
import Nav from "@/components/Nav.vue"
import Hero from "@/components/Hero.vue"

export default {
  components: {Nav, Hero},
  data() {
    return {}
  },
}
</script>

<template>
  <div class="columns is-multiline m-0">
    <RouterLink to="/" class="column p-0 is-hidden-mobile ">
      <Hero/>
    </RouterLink> 
    <div class="column p-0">
      <Nav/>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
    </div>
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";

html {
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
