<script>
export default {
  data() {
    return {
      copy: `JOSEPH T MOHAN &copy; ${new Date().getFullYear()}`,
      blurb: "<a href='https://github.com/skru/portfolio-vue3'>Made</a> with <a href='https://vuejs.org/'>Vue3</a> and <a href='https://bulma.io/'>Bulma</a>"
    }
  },
}
</script>

<template>
  <footer class="footer">
    <div class="content is-flex is-justify-content-space-between is-align-items-center is-size-7">
      <div><p v-html="copy"></p></div>
      <div><p v-html="blurb"></p></div>
    </div>
  </footer>
</template>