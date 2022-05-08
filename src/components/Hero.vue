<script>
export default {
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
  <section class="hero is-primary is-fullheight has-text-centered">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          {{ heroTitle }}
        </h1>
        <h1 class="subtitle is-3">
          {{ heroSubtitle }}
        </h1>
        <p class="subtitle is-italic">
          {{ heroItalic }}
        </p>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>