/**
 * Created by Bm on 2018/4/19.
 */
import Vue from 'vue'
import App from './App'
import vueHeader from '../src/assets/project/vueHeader.vue'
import vueHome from '../src/assets/project/vueHome.vue'
import vueFooter from '../src/assets/project/vueFooter.vue'
import vueProducts from '../src/assets/project/vueProducts.vue'
import vueFurniture from '../src/assets/project/vueFurniture.vue'
import vueMail from '../src/assets/project/vueMail.vue'
import vueCheck from '../src/assets/project/vueCheck.vue'
import vueLogo from '../src/assets/project/vueLogo.vue'
import vueSingle from '../src/assets/project/vueSingle.vue'

const routers = [
  {
    path: '/vuehome',
    name: 'home',
    component: vueHome
  },
 {
    path: '/vueHeader',
    component: vueHeader
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
];

export default routers
