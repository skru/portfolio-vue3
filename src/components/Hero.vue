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
        <h1 class="title is-1">
          {{ heroTitle }}
        </h1>
        <p class="subtitle is-italic">
          <font-awesome-icon :icon="['fas', 'jedi']" /> {{ heroItalic }}
        </p>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>