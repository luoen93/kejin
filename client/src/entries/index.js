/**
 * Created by bangbang93 on 16/9/30.
 */
'use strict';
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import App from '../app.vue'

import IndexPage from '../pages/index.vue'
import ListPage from '../pages/list.vue'
import AddPage from '../pages/add.vue'

require('es6-promise').polyfill();

Vue.use(Element);
Vue.use(VueRouter);

const routes = [{
  path: '/list',
  component: ListPage,
  name: 'list',
}, {
  path: '/add',
  component: AddPage,
  name: 'add',
}, {
  path: '/edit/:id',
  component: AddPage,
  name: 'edit',
},
  {
  path: '*',
  redirect: 'list'
}];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/kejin'
});

const page = new Vue({
  router
});

const app = new Vue({
  router,
  render: (h)=>h(App),
}).$mount('#app');
