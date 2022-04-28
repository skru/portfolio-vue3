<script setup>

</script>

<template>
  <div class="columns is-multiline m-0">
    <div class="column p-0">
      <section class="hero is-info is-fullheight has-text-centered">
        <div class="hero-head"></div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              Joseph Mohan
            </p>
            <p class="subtitle">
              London/Kent UK
            </p>
          </div>
        </div>
        <div class="hero-foot"></div>
      </section>
    </div>
    <div class="column">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <RouterLink to="/" class="button is-info">Home</RouterLink>
                <RouterLink to="/about" class="button is-light">About</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="section">
        <RouterView/>
      </section>
    </div>
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";

html {
  overflow-y: auto;
}

</style>
