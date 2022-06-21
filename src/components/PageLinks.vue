<script>
export default {
  props: {
    links: {
      type: Array
    }
  },
  methods: {
    iconType(link) {
      switch (link.type) {
        case "site":
          return ['fas', 'link']
        case "github":
          return ['fab', 'github']
      }
    }
  }
}
</script>

<template>
  <div class="field is-grouped  is-grouped-multiline">
    <div v-for="link in links" :key="link.type" class="control" >
      <a :href="link.link" class="tags has-addons">
        <span class="tag is-dark"><font-awesome-icon :icon="iconType(link)" /></span>
        <span class="tag">{{link.type}}</span>
      </a>
    </div>
  </div>
</template>