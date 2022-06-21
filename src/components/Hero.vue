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
  <section class="hero is-dark" :class="size ? size : ''">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-mobile">
          <div class="column is-4 is-offset-4">
            <figure class="image is-square">
              <img src="@/assets/img/portrait.jpg" class="is-rounded" alt="Joseph Mohan portfolio picture">
            </figure>
          </div>
        </div>
        
        <h1 class="title is-1">
          {{ heroTitle }}
        </h1>
        <p class="subtitle is-italic">
          <font-awesome-icon :icon="['fas', 'map-location-dot']" /> {{ heroItalic }}
        </p>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: var(--vh) !important;
}
</style>