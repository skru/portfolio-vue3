import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/projects/",
      name: "projects",
      component: () => import("@/layouts/Project.vue"),
      children: [
        {
          path: "",
          name: "index-projects",
          component: () => import("@/views/Projects.vue")
        },
        {
          path: "health-app",
          name: "health-app",
          component: () => import("@/views/projects/HealthApp.vue")
        },
        {
          path: "fm-synth",
          name: "fm-synth",
          component: () => import("@/views/projects/FMSynth.vue")
        },
        {
          path: "vue-calc",
          name: "vue-calc",
          component: () => import("@/views/projects/VueCalc.vue")
        },
        {
          path: "php-bookstore",
          name: "php-bookstore",
          component: () => import("@/views/projects/PHPBookstore.vue")
        },
        {
          path: "dis-sys",
          name: "dis-sys",
          component: () => import("@/views/projects/TicketSystem.vue")
        }
      ]
    },
    
  ]
})

export default router
