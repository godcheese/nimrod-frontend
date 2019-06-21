// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/index.js'
import './common/registerDirective.js'

import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'
Vue.use(AntDesignVue)

// mavon editor markdown editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
