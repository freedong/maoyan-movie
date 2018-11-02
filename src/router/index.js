import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import moviesMsg from '@/components/moviesMsg'
import starMsg from '@/components/starMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/moviesMsg/:id',
      name: 'moviesMsg',
      component: moviesMsg
    },
    {
      path: '/starMsg/:id',
      name: 'starMsg',
      component: starMsg
    }
  ]
})
