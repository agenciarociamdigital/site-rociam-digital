export default defineNuxtRouteMiddleware((to) => {
  // Permitir rotas existentes e não interferir com páginas válidas
  const validPaths = [
    '/', 
    '/contato', 
    '/sobre', 
    '/solucoes', 
    '/solucoes/geracao-de-leads',
    '/solucoes/trafego-pago',
    '/solucoes/desenvolvimento-web',
    '/solucoes/crm',
    '/solucoes/analytics',
    '/erro',
    '/politica-de-privacidade',
    '/termos-de-uso'
  ]
  
  // Verificar se a rota atual está nas rotas válidas ou se é uma rota dinâmica válida
  const isValidRoute = validPaths.includes(to.path) || to.path.startsWith('/solucoes/')
  
  // Só redirecionar se a rota não existe E não está na lista de válidas
  if (to.matched.length === 0 && !isValidRoute) {
    return navigateTo('/erro')
  }
})
