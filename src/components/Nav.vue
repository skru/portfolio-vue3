<script>
import NavLink from "@/components/NavLink.vue"
export default {
  components: {
    NavLink  },
  data() {
    return {
      siteLinks: [
        { text: "Home", link: "/" },
        { text: "Projects", link: "/projects" },
      ],
      exLinks: [
        { link: "https://github.com/skru", icon: ['fab', 'github'] },
        { link: "https://www.linkedin.com/in/josephmohan/", icon: ['fab', 'linkedin'] },
      ],
      emailVisible: false,
      email: ""
    }
  },
  mounted() {
    this.email = import.meta.env.VITE_EMAIL_ADDRESS
  }
}
</script>

<template>
  <div>
    <nav class="navbar is-flex is-justify-content-space-between" role="navigation" aria-label="main navigation">
      <div class="navbar-item">
        <div class="buttons">
          <NavLink :to="link.link" v-for="link in siteLinks" :key="link.text">{{ link.text }}</NavLink>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-secondary is-small" :href="link.link" v-for="link in exLinks" :key="link.text">
            <span class="icon is-small">
              <font-awesome-icon :icon="link.icon" />
            </span>
          </a>
          <a class="button is-secondary is-small" @click="emailVisible = !emailVisible">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'at']" />
            </span>
          </a>
        </div>
      </div>
    </nav>
    <div class="modal is-active" v-if="emailVisible">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="notification is-primary has-text-centered">
          <button class="delete" @click="emailVisible = !emailVisible"></button>
          <a :href="`mailto:${email}`" >{{ email }}</a>
        </div>
      </div>
    </div>
  </div>
</template>