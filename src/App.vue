<template>
  <div >
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--<vueHeader/>-->

    <div class="header">
      <div class="container">
        <div class="header-grid">
          <div class="header-grid-left animated wow slideInLeft" data-wow-delay=".5s">
          </div>
          <div class="header-grid-right animated wow slideInRight" data-wow-delay=".2s">
            <ul class="social-icons">
              <li><a href="#" class="twitter"></a></li>
              <li>
                <i class="glyphicon " aria-hidden="true">
                </i><a href="login.html">
                <router-link to="/vueLogo">登录/免费注册</router-link>
                </a>
              </li>-->
            </ul>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="logo-nav">
          <div class="logo-nav-left animated wow zoomIn slideInLeft " data-wow-delay=".5s" >
            <h1><a href="index.html">Bounty Hunter <span>赏金猎人大型任务发布平台</span></a></h1>
          </div>
          <div class="logo-nav-left1">
            <nav class="navbar navbar-default">

              <div class="navbar-header nav_2">
                <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="index.html" class="act" >
                    <router-link to="/vueHome">首页</router-link>
                  </a></li>
                  <!-- Mega Menu -->
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      悬赏任务分类
                      <!--<router-link to="/vueProducts">悬赏任务分类 </router-link>-->
                      <b class="caret"></b></a>
                    <ul class="dropdown-menu multi-column columns-1">
                      <div class="row"  >
                        <div class="col-sm-10"  >
                          <ul class="multi-column-dropdown" style="padding-left: 40px;font-size：30px;" >
                            <li >
                              <a href="products.html" ><router-link to="/vueProducts">餐饮任务 </router-link></a>
                            </li>
                            <li><a href="products.html" >游戏任务</a></li>
                            <li><a href="products.html">休闲娱乐</a></li>
                            <li><a href="products.html">食品饮料</a></li>
                            <li ><a href="products.html">文化教育</a></li>
                            <li ><a href="products.html">IT任务</a></li>
                            <li ><a href="products.html">工业任务</a></li>
                            <li><a href="products.html">家具任务</a></li>
                            <li><a href="products.html">美容健身</a></li>
                            <li><a href="products.html">医疗行业</a></li>
                            <li><a href="products.html">交通运输</a></li>
                          </ul>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </ul>
                  </li>
                  <li >
                    <a href="furniture.html"  >
                      <router-link to="/vueFurniture">最新任务列表 </router-link>
                    </a>
                  </li>
                  <li><a href="mail.html">
                    <router-link to="/vueMail">任务发布 </router-link></a>
                  </li>
                  <li><a href="checkout.html">
                    <router-link to="/vueCheck">历史任务</router-link></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
    <!--<vueHome/>-->

    <!--<router-link to="/vueHome">Go to 123</router-link>-->
    <!--<router-link to="/vueHeader">Go to Foo</router-link>-->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

    <vueFooter/>
  </div>
</template>

<script >
import vueHeader from '../src/assets/project/vueHeader'
import vueHome from '../src/assets/project/vueHome.vue'
import vueFooter from '../src/assets/project/vueFooter.vue'
import vueProducts from '../src/assets/project/vueProducts.vue'
import vueFurniture from '../src/assets/project/vueFurniture.vue'
import vueMail from '../src/assets/project/vueMail.vue'
import vueCheck from '../src/assets/project/vueCheck.vue'
import vueLogo from '../src/assets/project/vueLogo.vue'
import vueSingle from '../src/assets/project/vueSingle.vue'
import router from './router'


//import bootstrap  from './components/js/bootstrap-3.1.1.min.js'
 import classie from '../src/assets/project/js/classie'
// import imagezoom from '../src/assets/project/js/imagezoom'
 import jquery_countdown from '../src/assets/project/js/jquery.countdown'
// import jquery_flexslider from '../src/assets/project/js/jquery.flexslider'
 import jquery_min from '../src/assets/project/js/jquery.min'
 import jquery_wmuSlider from '../src/assets/project/js/jquery.wmuSlider'

// import jquery_ui from '../src/assets/project/js/jquery-ui.min'
 import script from '../src/assets/project/js/script'
// import simpleCart_min from '../src/assets/project/js/simpleCart.min'
// import uisearch from '../src/assets/project/js/uisearch'
// import vue_min from '../src/assets/project/js/vue.min'
// import wow from '../src/assets/project/js/wow.min'


export default {
  name: 'App',
  components:{
      vueHeader,
      vueHome,
      vueFooter,
      vueProducts,
      vueSingle
  }

}


</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
