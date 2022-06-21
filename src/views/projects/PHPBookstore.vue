<script>
import PageLinks from "@/components/PageLinks.vue"

export default {
  components: {
    PageLinks
  },
  data(){
    return {
      links: [
          { type: "github", link: "https://github.com/skru/PHP-Bookstore" },
      ],
    }
  }
}
</script>

<template>
  <div class="content">
    <h1 class="title">
      PHP Bookstore
    </h1>
    <p class="subtitle">2015</p>
    <PageLinks :links="links"/>
    <hr>
    <p>
      First PHP project, a University assignment that I achieved a high first for. 
      A bookstore web app using Sqlite with CRUD operations. 
    </p>
    <p>
      The selection of books can be filtered by category or a text search for ISBN, author, title etc. 
      The admin section which allows the creation, editing and deletion of books has been disabled in the live demo for obvious security reasons but can be seen in the code on github.
      All database queries are written in SQL and form inputs are sanitised from SQL injection.
    </p>
  </div>
  
</template>