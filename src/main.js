// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(VueRouter);

var sellerrouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      components: {main: goods}
    },
    {
      path: '/ratings',
      components: {main: ratings}
    },
    {
      path: '/seller',
      components: {main: seller}
    }
    ]
});

/* eslint-disable no-new */
new Vue({
  router: sellerrouter,
  el: '#index_content',
  components: {App}
});
