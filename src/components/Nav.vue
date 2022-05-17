<script>
import NavLink from "@/components/NavLink.vue"
import MainLinks from "@/components/MainLinks.vue"
export default {
  components: {
    NavLink,
    MainLinks
  },
  data() {
    return {
      siteLinks: [
        { text: "Home", link: "/" },
        { text: "Projects", link: "/projects" },
        // { text: "Tech", link: "/tech" },
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
    console.log("this.email", this.email)
  }
}
</script>

<template>
  <div>
    <nav class="navbar is-flex is-justify-content-space-between" role="navigation" aria-label="main navigation">
      <div class="navbar-item">
        <div class="buttons">
          <NavLink to="/" :type="'is-default'">home</NavLink>
          <NavLink to="/projects" :type="'is-default'">projects</NavLink>
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
          <p class="subtitle">{{ email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>