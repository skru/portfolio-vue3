<script>
export default {
  props: ["to", "type"],
}
</script>

<template>
  <RouterLink :to="to" v-slot="{ href, navigate, isActive }" custom>
    <button class="button" 
      :class="[type ? type : '', { 'is-primary is-selected': isActive }]" 
      :href="href" @click="navigate">
        <slot></slot>
    </button>
  </RouterLink>
</template>