// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import store from './store'

import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Grid from './components/grid/Grid'
import GridHeader from './components/grid/GridHeader'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.prototype.$axios = axios

const routes = [
  {path: '/', component: {template: '<h1>Senyint Vue Element</h1>'}},
  {path: '/hello', component: Hello},
  {path: '/grid', component: Grid},
  {path: '/gridheader', component: GridHeader},
  {path: '*', component: {template: '<p>404页面什么都没有啊</p>'}}
]

exports.hello = Hello

window.$grid = Grid

const router = new VueRouter({
  mode: 'hash',
  routes // （缩写）相当于 routes: routes
})

Vue.directive('onclick', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el, binding, vnode) {
    // 聚焦元素
    debugger
    console.log(el)
    console.log(binding.value.fun)
    console.log(vnode)
    el.addEventListener('click', binding.value.fun)
  }
})

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    console.log('focus')
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App)
})

