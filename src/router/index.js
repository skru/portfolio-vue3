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
    // {
    //   path: "/tech",
    //   name: "tech",
    //   component: () => import("@/layouts/Tech.vue"),
    //   children: [
    //     {
    //       path: "",
    //       name: "index-tech",
    //       component: () => import("@/views/Tech.vue")
    //     },
    //     {
    //       path: "js",
    //       name: "js",
    //       meta: {tags: ["javascript", "vuejs"]},
    //       component: () => import("@/views/tech/JS.vue")
    //     }
    //   ]
    // },
    {
      path: "/projects",
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
          meta: {tags: ["javascript", "vuejs"]},
          component: () => import("@/views/projects/HealthApp.vue")
        },
        // {
        //   path: "php-bookstore",
        //   name: "php-bookstore",
        //   meta: {tags: ["javascript", "php"]},
        //   component: () => import("@/views/projects/PHPBookstore.vue")
        // }
      ]
    },
    
  ]
})

export default router
