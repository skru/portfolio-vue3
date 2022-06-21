<script>
import PageLinks from "@/components/PageLinks.vue"
import Overlay from "@/components/Overlay.vue"
import VueCalc from "@/components/apps/VueCalc.vue"

export default {
  components: {
    PageLinks,
    Overlay,
    VueCalc
  },
  data(){
    return {
      links: [
          { type: "github", link: "https://github.com/skru/PHP_Angular_QueueSystem" },
      ],
    }
  }
}
</script>

<template>
  <div class="content">
    <h1 class="title">
      PHP/Angular.js Ticketing System
    </h1>
    <p class="subtitle">2020</p>
    <PageLinks :links="links"/>
    <hr>
    <p>
        Third-year web technology degree assignment for distributed architecture and web programming. PHP backend with MySql integration to provide a REST API for the decoupled Angular.js and PHP frontend applications to query.&nbsp;</p>\r\n<p>Simulates a queuing system with three interfaces: a ticket issuing utility (PHP), ticket serving interface (Angular.js) and administration dashboard (PHP).</p>\r\n<p>Instructions to run the project are available within the github repo.distsys PHP, Angular.js project with multiple intefaces and backend REST API t
    </p>
  </div>
</template>