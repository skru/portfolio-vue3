<template class="">
  <div class="is-hidden-mobile from-top is-overlay is-flex is-flex-direction-column is-justify-content-space-around">
    <section class="section is-flex-grow-1">
      <slot></slot>
    </section>
  </div>
</template>
<style scoped>
.is-overlay{
  width:50%;
}
</style>