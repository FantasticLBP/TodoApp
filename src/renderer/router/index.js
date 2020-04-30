import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/view/NewNote').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: require('@/view/TodoList').default
    },
    {
      path: '/NewNote',
      name: 'NewNote',
      component: require('@/view/NewNote').default
    },
    {
      path: '/DatePicker',
      name: 'DatePicker',
      component: require('@/view/DatePicker').default
    }
  ]
})
