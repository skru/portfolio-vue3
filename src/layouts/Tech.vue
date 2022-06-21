<script>
import NavLink from "@/components/NavLink.vue"
import { childRoutes } from "../composables/nav.js"
import helpers from '@/mixins/helpers.js'

export default {
  components: {NavLink},
  mixins: [helpers],
  data() {
    return {
      childRoutes: childRoutes(this.$router)
    }
  }
}
</script>

<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-item">
        <div class="buttons">
          <NavLink :to="{name: route.name}" 
            :type="'is-small'" 
            v-for="(route, index) in childRoutes" 
            :key="index">
              {{splitText(route.name)}}
          </NavLink>
        </div>
      </div>
  </nav>
    <section class="section">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
    </section>
  </div>
</template>