import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import moviesMsg from '@/components/moviesMsg'
import starMsg from '@/components/starMsg'
import smallComment from '@/components/smallComment'
import comment from '@/components/comment'
import comingSoon from '@/components/comingSoon'
import searchPage from '@/components/searchPage'
import serchResult from '@/components/serchResult'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inTheaters',
      component: inTheaters
    },
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
    },
    {
      path: '/comingSoon',
      name: 'comingSoon',
      component: comingSoon
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/serchResult',
      name: 'serchResult',
      component: serchResult
    }
  ]
})
