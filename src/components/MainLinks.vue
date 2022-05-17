<script>
export default {
  data() {
    return {
      links: [
        { text: "github", link: "/" },
        { text: "linkedin", link: "/" },
        { text: "email", link: "/" },
      ]
    }
  }
}
</script>

<template>
  <div class="field is-grouped is-grouped-multiline">
    <div v-for="link in links" :key="link.text" class="control" >
      <a :href="link.link" class="tags has-addons" target="_blank">
        <span class="tag"><font-awesome-icon :icon="['fab', 'github']" /></span>
        <span class="tag is-warning">{{link.text}}</span>
      </a>
    </div>
  </div>
</template>