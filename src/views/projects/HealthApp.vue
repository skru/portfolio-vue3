<script>
import PageLinks from "@/components/PageLinks.vue"
import AppView from "@/components/AppView.vue"
import Overlay from "@/components/Overlay.vue"
export default {
  components: {
    PageLinks,
    AppView,
    Overlay
  },
  data() {
      return {
          links: [
              { type: "site", link: "https://jmohan.me/apps/phc" },
              { type: "github", link: "https://github.com/skru/HealthAppVue" },
          ]
      };
  }
}
</script>

<template>
  <div class="content">
    <h1 class="title">
      Proactive Healthcare
    </h1>
    <p class="subtitle">2020</p>
    <PageLinks :links="links"/>
    <hr>
    <p>
      Final year project of my Web Technology degree in which I achieved a high first.
      A distributed system using Vue.js as the frontend as a <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">Progressive Web App</a> (PWA). 
      The PWA is a single page application that utilises a <a href="https://www.djangoproject.com/">Python Django Framework</a> backend 
      REST API to enable text and video chat and a database of common health conditions which is searchable offline.
    </p>
    <p>
     From the project report:
    </p>
    <blockquote>
      A responsive company website, an Android app, an IOS app. 
      The minimum three platforms in 2020 that most companies will develop, release, and maintain to engage as many users as they can. 
      Development time and cost can be significant to the company and often the end user experience can be fragmented across the company's web and device ecosystem.
    </blockquote>
    <p>
      The project is intended to highlight how open source web technologies 
      can be utilised to offer a user experience that parallels that of a native application in the context of a 
      scalable distributed system intended for use by the general public.
    </p>
  </div>

  <!-- <AppView>
  
  </AppView>
  
  <Overlay>
    
  </Overlay> -->
</template>