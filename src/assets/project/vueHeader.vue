<template>
  <div class="header">
    <div class="container">
      <div class="header-grid">
        <div class="header-grid-left animated wow slideInLeft" data-wow-delay=".5s">
        </div>
        <div class="header-grid-right animated wow slideInRight" data-wow-delay=".2s">
          <ul class="social-icons">
            <!--<li><a href="#" class="facebook"></a></li>-->
            <li><a href="#" class="twitter"></a></li>
            <li>
              <i class="glyphicon " aria-hidden="true">
              </i><a href="login.html"> 登录/免费注册</a>
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
                <li class="active"><a href="index.html" class="act" v-link="{path:'/vueHome'}">

                  首页
                </a></li>
                <!-- Mega Menu -->
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">悬赏任务分类 <b class="caret"></b></a>
                  <ul class="dropdown-menu multi-column columns-1">
                    <div class="row"  >
                      <div class="col-sm-8"  >
                        <ul class="multi-column-dropdown" style="padding-left: 40px;font-size：30px;" >
                          <!--<h6>分类列表</h6>-->
                          <li ><a href="products.html" >餐饮任务</a></li>
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
                <li  >
                  <a href="furniture.html" >最新任务列表
                    <!--<b class="caret"></b>-->
                  </a>

                </li>
                <li><a href="mail.html">任务发布</a></li>
                <li><a href="checkout.html">历史任务</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="clearfix"> </div>
      </div>
    </div>
  </div>

</template>

<script >
  export default{
  name:'vueHeader',
    data(){
      return {
          msg:'我是主页'
      }
    }
  }
</script>

<style >

</style>
