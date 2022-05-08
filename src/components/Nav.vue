<script>
import NavLink from "@/components/NavLink.vue"
export default {
  components: {NavLink},
}
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-item">
      <div class="buttons">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/tech">Tech</NavLink>
      </div>
    </div>
  </nav>
</template>