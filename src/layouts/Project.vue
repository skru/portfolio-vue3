<script>
import NavChildren from "@/components/NavChildren.vue"
import Pagination from "@/components/Pagination.vue"

export default {
  components: {
    NavChildren,
    Pagination
  }
}
</script>

<template>
  <div id="layout-section">
    <NavChildren/>
    <section class="section">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
    </section>
    <Pagination class="is-hidden-desktop"/>
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