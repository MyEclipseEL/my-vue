<template>
  <div>
  <!-- breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
        <li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
        <li class="active">历史记录</li>
      </ol>
    </div>
  </div>
  <!-- //breadcrumbs -->
  <!-- checkout -->
  <div class="checkout">
    <div class="container">
      <!--<h3 class="animated wow slideInLeft" data-wow-delay=".5s">您的购物清单包括： <span>3 件产品</span></h3>-->
      <div class="checkout-right animated wow slideInUp" data-wow-delay=".5s">
        <table class="timetable_sub">
          <thead>
          <tr>
            <th>序号</th>
            <th>任务</th>
            <!--<th>件数</th>-->
            <th>任务名字</th>
            <th>任务价格</th>
            <th>移除</th>
          </tr>
          </thead>
          <tr class="rem1">
            <td class="invert">1</td>
            <td class="invert-image"><a href="single.html">
              <img src="./images/22.jpg" alt=" " class="img-responsive" /></a>
            </td>
            <td class="invert" v-for="item in boardList">{{item.name}}</td>

            <td class="invert" v-for="item in boardList">{{item.price}}</td>
            <td class="invert">
              <div class="rem">
                <div class="close1"> </div>
              </div>
            </td>
          </tr>
          <tr class="rem2">
            <td class="invert">2</td>
            <td class="invert-image"><a href="single.html"><img src="./images/30.jpg" alt=" " class="img-responsive" /></a></td>
            <td class="invert">Centre Table</td>
            <!--<td class="invert">$5.00</td>-->
            <td class="invert">$250.00</td>
            <td class="invert">
              <div class="rem">
                <div class="close2"> </div>
              </div>

            </td>
          </tr>
          <tr class="rem3">
            <td class="invert">3</td>
            <td class="invert-image"><a href="single.html"><img src="./images/11.jpg" alt=" " class="img-responsive" /></a></td>
            <!--<td class="invert">-->
              <!--<div class="quantity">-->
                <!--<div class="quantity-select">-->
                  <!--<div class="entry value-minus">&nbsp;</div>-->
                  <!--&lt;!&ndash;<div class="entry value"><span>1</span></div>&ndash;&gt;-->
                  <!--<div class="entry value-plus active">&nbsp;</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</td>-->
            <td class="invert">Stone Bangles</td>
            <!--<td class="invert">$5.00</td>-->
            <td class="invert">$299.00</td>
            <td class="invert">
              <div class="rem">
                <div class="close3"> </div>
              </div>
            </td>
          </tr>
          <!--quantity-->
          <!--quantity-->
        </table>
      </div>
      <div class="checkout-left">
        <div class="checkout-right-basket animated wow slideInRight " data-wow-delay=".3s" >
          <a href="products.html" style="background: #ff9f37;"><span class="glyphicon glyphicon-menu-left " aria-hidden="true" ></span>返回任务列表</a>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
  <!-- //checkout -->
  </div>
</template>

<script >
export default{
  data(){
      return {
          boardList:[
            {
                num:10023,
                url:'http://xxx.com',
                name:'收购一双皮鞋',
                price:123,
            },


            ]

      }
  }
}

</script>

<style >

</style>
