import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Questions from './views/questions.vue'
import Register from './views/register.vue'
import Login from './views/login.vue'
import Asking from './views/submitquestion.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/asking',
      name: 'asking',
      component: Asking
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/questions/:id',
      name: 'questions',
      component: Questions
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
