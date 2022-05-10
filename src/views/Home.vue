<script>
import Hero from "@/components/Hero.vue"

export default {
  components: {
    Hero
  }
}
</script>

<template>
  <div>
    <Hero size="is-medium" class="is-hidden-tablet"/>
    <section class="section">
        <div class="content is-large">
          <h1>Hello World.</h1>
          <ul class="is-upper-roman">
            <li>A Decade of <b>Full Stack experiences.</b></li>
            <li>BSc (Hons) <b>Web Techology (1st),</b> 2019-2020.</li>
            <li>2 Years <b>post-graduate experience.</b></li>
          </ul>
        </div>
        <div class="content">
          <p>Proficient programmer and UX developer that understands the industry, customers and the small details in modern (and legacy) web apps. </p>
        </div>
    </section>
  </div>
</template>