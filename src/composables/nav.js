let isIndex = (routeName) => {
  return routeName.split("-")[0] !== "index"
}

let getChildRoutes = (router) => {
  return router.currentRoute.value.matched[0].children.filter(route => isIndex(route.name))
}

export function childRoutes(router) {
  return getChildRoutes(router)
}

export function pagination(router) {
  let childRoutes = getChildRoutes(router)
  let current = router.currentRoute.value.name
  if (isIndex(current)) {
    let pos = childRoutes.map(function(e) { return e.name; }).indexOf(current);
    return {
      prev: pos >= 0 ? childRoutes[pos-1] : false,
      next: pos <= childRoutes.length ? childRoutes[pos+1] : false,
    }
  } 
  else {
    return false
  }

  
}

