import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import moviesMsg from '@/components/moviesMsg'
import starMsg from '@/components/starMsg'
import smallComment from '@/components/smallComment'
import comment from '@/components/comment'

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
    },
    {
      path: '/smallComment/:id',
      name: 'smallComment',
      component: smallComment
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: comment
    }
  ]
})
