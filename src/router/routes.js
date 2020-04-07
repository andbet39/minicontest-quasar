const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EntryStream.vue') },
      { path: '/addentry', component: () => import('pages/AddEntry.vue'), meta: { requiresAuth:true }},
      { path: '/myEntry', component: () => import('pages/MyEntry.vue'), meta: { requiresAuth:true } },
      { path: '/contest/:id', component: () => import('pages/ContestMain.vue'), meta: { requiresAuth:true }},
      { path: '/contests', component: () => import('pages/ContestList.vue'), meta: { requiresAuth:true } },
      { path: '/entry/:id', component: () => import('pages/ViewEntry.vue') , meta: { requiresAuth:true }}
    ]
  },{
    path: '/auth/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/auth/signin', component: () => import('pages/SignIn.vue') },
      { name:'signup', path: '/auth/signup', component: () => import('pages/SignUp.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
