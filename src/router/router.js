
/* import { LayoutView, Modules } from '../components'

export default [
  {
    path: '/',
    redirect: (to) => {
      return '/main'
    }
  },
  {
    path: '/main',
    component: LayoutView.Main,
    children: [
      {
        path: '',
        redirect: to => {
          return 'hello'
        }
      },
      {
        path: 'hello',
        component: Modules.Hello
      }
    ]
  }
]

 */

import VueRouter from 'vue-router'

const hello = r => require.ensure([], () => r(require('../components/modules/Hello.vue')), 'hello')
const main = r => require.ensure([], () => r(require('../components/layoutView/main.vue')), 'main')
const routes = [
  {
    path: '/',
    component: main,
    children: [
      {
        path: '',
        component: hello
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      savedPosition = { x: 0, y: 0 }
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
