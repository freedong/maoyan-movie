import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    }
  ]
})
