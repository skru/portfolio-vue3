<script>
import { pagination } from "@/composables/nav.js"

export default {
  data() {
    return {
      pagination: pagination(this.$router),
    }
  },
  watch: {
    '$route' () {
      this.pagination = pagination(this.$router)     
    }
  }
}
</script>

<template>
  <section class="section pb-5">
    <nav class="is-flex is-justify-content-space-between" role="navigation" aria-label="pagination">
      <RouterLink class="button is-small is-fullwidth" :to="pagination.prev.path" v-if="pagination.prev">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </RouterLink>
      <RouterLink class="button is-small is-fullwidth" :to="pagination.next.path" v-if="pagination.next">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </RouterLink>
    </nav>
  </section>
</template>

<style scoped>
nav {
  width: 100%;
}
</style>