<script>
//  $(document).ready(function() {
//    $("#gallery_output img").not(":first").hide();
//
//    $("#gallery a").click(function() {
//      $("#gallery a").removeClass('on');
//      $(this).addClass("on");
//      if ($("#" + this.rel).is(":hidden")) {
//        $("#gallery_output img").slideUp();
//        $("#" + this.rel).slideDown();
//      }
//    });
//  });
  export default{

  }
</script>
<template>
  <div>
  <!-- breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol class="breadcrumb breadcrumb1 animated wow " >
        <li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
        <li class="active">商品详情</li>
      </ol>
    </div>
  </div>
  <!-- //breadcrumbs -->
  <!-- single -->
  <div class="single">
    <div class="container">
      <div class="col-md-12 single-right">
        <div class="col-md-5 single-right-left animated wow slideInUp" data-wow-delay=".5s">
          <div id="content">
            <div id="gallery" style=" border:none;">
              <div id="gallery_output" style="width:100%;height:450px;">
                <img id="img1" src="./images/food-07.jpg" style="width:100%;height:100%;">
                <img id="img2" src="./images/food-08.jpg" style="width:100%;height:100%;overflow: hidden">
                <img id="img3" src="./images/food-09.jpg" style="width:100%;height:100%;overflow: hidden">
                <img id="img4" src="./images/food-07.jpg" style="width:100%;height:100%;overflow: hidden" >
              </div>
              <div id="gallery_nav" style="float:left;width:100%;height:200px;">
                <a class="on" rel="img1" href="javascript:;" style="float:left" ><img src="./images/food-07.jpg" style="width:100px;height:120px;float:left;padding-left:5px;padding-top:20px;"></a>
                <a rel="img2" href="javascript:;" style="float:left"><img src="./images/food-08.jpg" style="width:100px;height:120px;float:left;padding-left:5px;padding-top:20px;"></a>
                <a rel="img3" href="javascript:;" style="float:left"><img src="./images/food-09.jpg" style="width:100px;height:120px;float:left;padding-left:5px;padding-top:20px;"></a>
                <a rel="img4" href="javascript:;" style="float:left"><img src="./images/food-07.jpg" style="width:100px;height:120px;float:left;padding-left:5px;padding-top:20px;"></a>
              </div>


              <div class="clear"></div>
            </div>

          </div>

        </div>
        <div class="col-md-7 single-right-left simpleCart_shelfItem animated wow slideInRight" data-wow-delay=".5s">
          <h3><span>任务名称：</span>收购一份营养早餐</h3>
          <h4 style="padding-top:20px;color:black">任务价格 ￥:<span class="item_price" style="color:orangered;font-size: 30px;">150</span></h4>
          <h4 style="padding-top:10px;color:black;"><span>配送至：</span>科厦北门</h4>
          <h4 style="padding-top:10px;color:black"><span>联系电话：</span>1745153666</h4>
          <!--<div class="rating1">-->
						<!--<span class="starRating">-->
							<!--<input id="rating5" type="radio" name="rating" value="5">-->
							<!--<label for="rating5">5</label>-->
							<!--<input id="rating4" type="radio" name="rating" value="4">-->
							<!--<label for="rating4">4</label>-->
							<!--<input id="rating3" type="radio" name="rating" value="3" checked>-->
							<!--<label for="rating3">3</label>-->
							<!--<input id="rating2" type="radio" name="rating" value="2">-->
							<!--<label for="rating2">2</label>-->
							<!--<input id="rating1" type="radio" name="rating" value="1">-->
							<!--<label for="rating1">1</label>-->
						<!--</span>-->
          <!--</div>-->
          <div class="description" >
            <h4 style="color: black;">任务描述: <i></i></h4>
            <p style="font-size: 20px;">一食堂早餐，营养可口，健康可靠，帮忙带一份</p>
          </div>

          <!--<div class="occasional">-->
            <!--<h5>套餐选择 :</h5>-->
            <!--<div class="colr ert">-->
              <!--<label class="radio"><input type="radio" name="radio" checked=""><i></i>带一次性餐具</label>-->
            <!--</div>-->
            <!--<div class="colr">-->
              <!--<label class="radio"><input type="radio" name="radio"><i></i>第二种方案</label>-->
            <!--</div>-->
            <!--<div class="colr">-->
              <!--<label class="radio"><input type="radio" name="radio"><i></i>第三种方案</label>-->
            <!--</div>-->
            <!--<div class="clearfix"> </div>-->
          <!--</div>-->

          <div class="" style="height:50px;width:200px;background: #ff9f37;text-align: center;margin-left:50px;">
            <a class="item_add" href="#" style="color: white;font-size:20px;height:50px;line-height:50px;">接收任务 </a>
          </div>
          <div class="social">
            <div class="social-left;padding-left:10px;color:grey;">
              <p>温馨提示：发布者与接受者均已缴纳保证金500元，发出任务真实有效，如出现交易问题，保证金赔付，望周知。</p>
            </div>
            <div style="float:right;">
              <a href="#" class="instagram">有关详情</a>
            </div>

            <div class="clearfix"> </div>
          </div>
        </div>
        <div class="clearfix"> </div>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div>
  <!-- //single -->
  <!-- single-related-products -->
  <div class="single-related-products">
    <div class="container">
      <h3 class="animated wow " >相关任务推荐</h3>

      <div class="new-collections-grids">
        <div class="col-md-3 new-collections-grid">
          <div class="new-collections-grid1 animated wow slideInLeft" data-wow-delay=".4s">
            <div class="new-collections-grid1-image">
              <a href="single.html" class="product-image"><img src="./images/food-07.jpg" alt=" " class="img-responsive"></a>
              <div class="new-collections-grid1-image-pos">
                <a href="single.html">Quick View</a>
              </div>
              <div class="new-collections-grid1-right">
                <div class="rating">
                  <div class="rating-left">
                    <img src="images/2.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/2.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/1.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/1.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/1.png" alt=" " class="img-responsive">
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
            <h4><a href="single.html">Running Shoes</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div class="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$280</i> <span class="item_price">$150</span><a class="item_add" href="#">add to cart </a></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 new-collections-grid">
          <div class="new-collections-grid1-sub">
            <div class="new-collections-grid1 animated wow slideInLeft" data-wow-delay=".5s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-07.jpg" alt=" " class="img-responsive"></a>
                <div class="new-collections-grid1-image-pos">
                  <a href="single.html">Quick View</a>
                </div>
                <div class="new-collections-grid1-right">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive">
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">Wall Lamp</a></h4>
              <p>Vel illum qui dolorem eum fugiat.</p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p><i>$480</i> <span class="item_price">$400</span><a class="item_add" href="#">add to cart </a></p>
              </div>
            </div>
          </div>
          <div class="new-collections-grid1-sub">
            <div class="new-collections-grid1 animated wow slideInLeft" data-wow-delay=".6s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-07.jpg" alt=" " class="img-responsive"></a>
                <div class="new-collections-grid1-image-pos">
                  <a href="single.html">Quick View</a>
                </div>
                <div class="new-collections-grid1-right">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive">
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive">
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">Wall Lamp</a></h4>
              <p>Vel illum qui dolorem eum fugiat.</p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p><i>$280</i> <span class="item_price">$150</span><a class="item_add" href="#">add to cart </a></p>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
        <div class="col-md-3 new-collections-grid">
          <div class="new-collections-grid1 animated wow slideInLeft" data-wow-delay=".7s">
            <div class="new-collections-grid1-image">
              <a href="single.html" class="product-image"><img src="./images/food-07.jpg" alt=" " class="img-responsive"></a>
              <div class="new-collections-grid1-image-pos">
                <a href="single.html">Quick View</a>
              </div>
              <div class="new-collections-grid1-right">
                <div class="rating">
                  <div class="rating-left">
                    <img src="images/2.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/2.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/2.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/2.png" alt=" " class="img-responsive">
                  </div>
                  <div class="rating-left">
                    <img src="images/1.png" alt=" " class="img-responsive">
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
            <h4><a href="single.html">Stones Bangles</a></h4>
            <p>Vel illum qui dolorem eum fugiat.</p>
            <div class="new-collections-grid1-left simpleCart_shelfItem">
              <p><i>$340</i> <span class="item_price">$257</span><a class="item_add" href="#">add to cart </a></p>
            </div>
          </div>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
  <!-- //single-related-products -->
  </div>
</template>



<style >

  /** {*/
    /*padding:0px*/
  /*}*/
  #gallery img {
    border:none;
  }
  #gallery_nav {
    float:left;
    width:112px;
    text-align:center;
  }
  #gallery_nav a {
    display:block;
    height:82px;
  }
  #gallery_nav img {
    width:100px;
    height:120px;
    float:left;
    padding-left:5px;
    padding-top:20px;
  }
  /*#gallery_output {*/
    /*float:left;*/
    /*width:600px;*/
    /*overflow:hidden;*/
  /*!*}*!*/
  /*#gallery_output img {*/
    /*display:block;*/
    /*margin:0px auto 0 auto;*/
    /*width:100%;*/
    /*height:100%;*/
  /*}*/
  /*.on {*/
    /*border:1px solid rgba(92,92,92,1.00);*/
</style>
