let getChildRoutes = (router) => {
  return router.currentRoute.value.matched[0].children.filter(route => route.name.split("-")[0] !== "index")
}

export function childRoutes(router) {
  return getChildRoutes(router)
}

export function pagination(router) {
  let childRoutes = getChildRoutes(router)
  let current = router.currentRoute.value.name
  if (name.split("-")[0] !== "index") {
    console.log("page", childRoutes, current)
    let pos = childRoutes.map(function(e) { return e.name; }).indexOf(current);
    console.log("pos", pos)
    return {
      prev: pos >= 0 ? childRoutes[pos-1] : false,
      next: pos <= childRoutes.length ? childRoutes[pos+1] : false,
    }
  } 
  else {
    return false
  }

  
}

