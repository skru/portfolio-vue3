export function childRoutes(router) {
  return router.currentRoute.value.matched[0].children.filter(route => route.name.split("-")[0] !== "index")
}

