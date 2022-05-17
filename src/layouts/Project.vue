<script>
import NavLink from "@/components/NavLink.vue"
import { childRoutes, pagination } from "../composables/nav.js"
import helpers from '@/mixins/helpers.js'

export default {
  components: {NavLink},
  mixins: [helpers],
  data() {
    return {
      childRoutes: childRoutes(this.$router),
      pagination: pagination(this.$router),
    }
  },
  watch: {
    '$route' () {
      this.pagination = pagination(this.$router)     
    },
    
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
    <section class="section">
      <nav class="is-flex is-justify-content-space-between" role="navigation" aria-label="pagination">
        <RouterLink class="button is-small is-rounded" :to="pagination.prev.path" v-if="pagination.prev">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </RouterLink>
        <RouterLink class="button is-small is-rounded is-pulled-right " :to="pagination.next.path" v-if="pagination.next">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </RouterLink>
      </nav>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#layout-section {
  display: flex;
  flex-direction: column;
  height: calc(100% - 52px);
  .section:nth-child(2) {
    flex: 1;
  }
}
</style>