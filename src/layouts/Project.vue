<script>
import NavLink from "@/components/NavLink.vue"
import Pagination from "@/components/Pagination.vue"
import { childRoutes } from "../composables/nav.js"
import helpers from '@/mixins/helpers.js'

export default {
  components: {
    NavLink,
    Pagination
  },
  mixins: [helpers],
  data() {
    return {
      childRoutes: childRoutes(this.$router),
      //pagination: pagination(this.$router),
    }
  },
  watch: {
    // '$route' () {
    //   this.pagination = pagination(this.$router)     
    // },
    
  },
}
</script>

<template>
  <div id="layout-section">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-item is-flex-shrink-1">
        <div class="buttons has-addons">
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
    <Pagination/>
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins.sass";
#layout-section {
  display: flex;
  flex-direction: column;
  height: calc(100% - 52px); // navbar
  @include mobile {
    height: 100%;
  }
  .section:nth-child(2) {
    flex: 1;
  }
}
</style>