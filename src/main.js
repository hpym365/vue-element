// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Grid from './components/grid/Grid'
import GridHeader from './components/grid/GridHeader'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: {template: '<h1>Senyint Vue Element</h1>'} },
  { path: '/hello', component: Hello },
  { path: '/grid', component: Grid },
  { path: '/gridheader', component: GridHeader },
  { path: '*', component: {template: '<p>404页面什么都没有啊</p>'} }
]

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
