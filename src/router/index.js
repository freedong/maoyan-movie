import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import moviesMsg from '@/components/moviesMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/movie/:id',
      name: 'moviesMsg',
      component: moviesMsg
    }
  ]
})
