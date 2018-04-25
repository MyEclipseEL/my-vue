// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'

import vueHeader from '../src/assets/project/vueHeader.vue'
import vueHome from '../src/assets/project/vueHome.vue'
import vueFooter from '../src/assets/project/vueFooter.vue'
import vueProducts from '../src/assets/project/vueProducts.vue'
import vueFurniture from '../src/assets/project/vueFurniture.vue'
import vueMail from '../src/assets/project/vueMail.vue'
import vueCheck from '../src/assets/project/vueCheck.vue'
import vueLogo from '../src/assets/project/vueLogo.vue'
import vueSingle from '../src/assets/project/vueSingle.vue'

import animate from '../src/assets/project/css/animate.min.css'
import bootstrap from '../src/assets/project/css/bootstrap.css'
import fleslider from '../src/assets/project/css/flexslider.css'
import jquery_ui from '../src/assets/project/css/jquery-ui.css'
import style from '../src/assets/project/css/style.css'
import add from '../src/assets/project/css/add.css'

// import dmaku from '../src/assets/project/css/dmaku.css'

// import bootstrap from '../src/assets/project/js/bootstrap-3.1.1.min'
import classie from '../src/assets/project/js/classie'
// import imagezoom from '../src/assets/project/js/imagezoom'
import jquery_countdown from '../src/assets/project/js/jquery.countdown'
import jquery_flexslider from '../src/assets/project/js/jquery.flexslider'
import jquery_min from '../src/assets/project/js/jquery.min'
import jquery_wmuSlider from '../src/assets/project/js/jquery.wmuSlider'
// import jquery_ui from '../src/assets/project/js/jquery-ui.min'
import script from '../src/assets/project/js/script'
// import simpleCart_min from '../src/assets/project/js/simpleCart.min'
// import uisearch from '../src/assets/project/js/uisearch'
// import vue_min from '../src/assets/project/js/vue.min'
// import wow from '../src/assets/project/js/wow.min'
import '../src/assets/project/js/bootstrap-3.1.1.min'
import '../src/assets/project/css/bootstrap.css'


Vue.use(VRouter)
Vue.use(VueAxios, axios)

let router = new VRouter({
  mode:'history',
   routes: [
      {
        path:'/vueHome',
        component:vueHome
      },
      {
        path:'/vueHeader',
        component:vueHeader
      },
     {
       path: '/vueFooter',
       component: vueFooter
     },
     {
       path:'/vueProducts',
       component:vueProducts
     },
     {
       path:'/vueFurniture',
       component:vueFurniture
     },
     {
       path:'/vueMail',
       component:vueMail
     },
     {
       path:'/vueCheck',
       component:vueCheck
     },
     {
       path:'/vueLogo',
       component:vueLogo
     },
     {
       path:'/vueSingle',
       component:vueSingle
     }

    ]
})

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  axios,
  components: { App },
  template: '<App/>'
})
