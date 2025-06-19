export default defineNuxtRouteMiddleware((to) => {
  // Permitir rotas existentes e não interferir com páginas válidas
  const validPaths = ['/', '/contato', '/sobre', '/solucoes', '/erro']
  
  // Só redirecionar se a rota não existe E não está na lista de válidas
  if (to.matched.length === 0 && !validPaths.includes(to.path)) {
    return navigateTo('/erro')
  }
})
