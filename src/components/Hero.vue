<script>
export default {
  props: {size: {type: String}},
  data() {
    return {
      heroTitle: "Joseph Mohan",
      heroSubtitle: "Web Developer",
      heroItalic: "London/Kent UK"
    }
  }
}
</script>

<template>
  <section class="hero is-primary" :class="size ? size : ''">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-tertiary p-4">
          {{ heroTitle }}
        </h1>
        <p class="subtitle is-italic is-tertiary p-4">
          <font-awesome-icon :icon="['fas', 'map-location-dot']" /> {{ heroItalic }}
        </p>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/project-variables";
.hero {
  min-height: var(--vh) !important;
}
.title, .subtitle {
  background: $secondary;
}
</style>