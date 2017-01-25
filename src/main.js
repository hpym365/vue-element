// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jquery from 'jquery'
import store from './store'

import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Grid from './components/grid/Grid'
import GridHeader from './components/grid/GridHeader'

import Test from './components/Test.vue'
import Div from './components/Div.vue'
import Button from './components/Button.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.prototype.$axios = axios
Vue.prototype.$ = jquery

const routes = [
  {path: '/', component: {template: '<h1>Senyint Vue Element</h1>'}},
  {path: '/hello', component: Hello},
  {path: '/grid', component: Test},
  {path: '/gridheader', component: GridHeader},
  {path: '*', component: {template: '<p>404页面什么都没有啊</p>'}}
]

exports.hello = Hello
let returnobject = {}
returnobject.$grid = Grid
returnobject.$div = Div
returnobject.$button = Button
window.returnobject = returnobject

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

