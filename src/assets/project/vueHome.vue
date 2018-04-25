<template>
  <div>
  <!-- banner -->
  <div id="myCarousel" class="carousel slide"data-ride="carousel">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner" style="width:100%;height:750px" >
      <div class="item active">
        <img src="./images/banner-36.jpg" alt="First slide"  style="width:100%;height:100%">
      </div>
      <div class="item">
        <img src="./images/banner-05.jpg" alt="Second slide"  style="width:100%;height:100%">
      </div>
      <div class="item">
        <img src="./images/banner-35.jpg" alt="Third slide"  style="width:100%;height:100%">
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!-- //banner -->
  <!-- banner-bottom -->
  <div class="banner-bottom">
    <div class="container">
      <div class="banner-bottom-grids">
        <div class="banner-bottom-grid-left animated wow slideInLeft" data-wow-delay=".2s">
          <div class="grid">
            <figure class="effect-julia">
              <img src="./images/add-02.jpg" alt=" " class="img-responsive" />
              <figcaption>
                <h3>最火任务 <span></span><i> 拼购炸鸡电影</i></h3>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="banner-bottom-grid-left1 animated wow slideInUp" data-wow-delay=".2s">
          <div class="banner-bottom-grid-left-grid left1-grid grid-left-grid1" >
            <div class="banner-bottom-grid-left-grid1" style="height:230px;" >
              <img src="./images/banner-01.jpg" alt=" " class="img-responsive" />
            </div>
            <div class="banner-bottom-grid-left1-pos">
              <p>说走就走的旅行</p>
            </div>
          </div>
          <div class="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
            <div class="banner-bottom-grid-left-grid1" style="height:230px">
              <img src="./images/banner-19.jpg" alt=" " class="img-responsive"   />
            </div>
            <div class="banner-bottom-grid-left1-position">
              <div class="banner-bottom-grid-left1-pos1">
                <p>任务：代购咖啡花语豆</p>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-bottom-grid-right animated wow slideInRight" data-wow-delay=".2s">
          <div class="banner-bottom-grid-left-grid grid-left-grid1">
            <div class="banner-bottom-grid-left-grid1" >
              <img src="./images/cover_bg_1.jpg" alt=" " class="img-responsive" style="height:480px" >
            </div>
            <div class="grid-left-grid1-pos">
              <p>任务：大量招募街头艺人 <span></span></p>
            </div>
          </div>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
  <!-- //banner-bottom -->
    <!-- collections -->
    <div class="new-collections">
      <div class="container">
        <h3 class="animated wow zoomIn" data-wow-delay=".1s">最新任务发布</h3>

        <div class="new-collections-grids">
          <div class="col-md-3 new-collections-grid">
            <div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image">
                  <img src="./images/7.jpg" alt=" " class="img-responsive" />
                </a>

                <div class="new-collections-grid1-image-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="./images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">任务：代购美国Gucci衬衫</a></h4>
              <p>L码</p>
              <p v-html="hello">

              </p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p><i>￥650</i> <span class="item_price">￥500</span>
                  <a class="item_add" href="single.html">详 情</a></p>
              </div>
            </div>
            <div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/8.jpg" alt=" " class="img-responsive" /></a>
                <div class="new-collections-grid1-image-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="./images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="./images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">任务：找寻丢失男童</a></h4>
              <p>穿着蓝色彪马鞋</p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p><i></i> <span class="item_price">￥15000</span>
                  <a class="item_add" href="single.html">详 情</a>
                </p>
              </div>
            </div>

          </div>
          <div class="col-md-6 new-collections-grid">
            <div class="new-collections-grid1 new-collections-grid1-image-width animated wow slideInUp" data-wow-delay=".5s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/5.jpg" alt=" " class="img-responsive" /></a>
                <div class="new-collections-grid1-image-pos new-collections-grid1-image-pos1">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right new-collections-grid1-right-rate">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
                <div class="new-one">
                  <p>New</p>
                </div>
              </div>
              <h4><a href="single.html">任务：清理厨房家具和桌椅</a></h4>
              <p>因油污较为严重</p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p><i>￥100</i> <span class="item_price">￥300</span>
                  <a class="item_add" href="single.html">详 情</a>
                </p>
              </div>
            </div>
            <div class="new-collections-grid-sub-grids">
              <div class="new-collections-grid1-sub">
                <div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
                  <div class="new-collections-grid1-image">
                    <a href="single.html" class="product-image"><img src="./images/6.jpg" alt=" " class="img-responsive" /></a>
                    <div class="new-collections-grid1-image-pos">
                      <a href="single.html">点击查看详情</a>
                    </div>
                    <div class="new-collections-grid1-right">
                      <div class="rating">
                        <div class="rating-left">
                          <img src="images/2.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/2.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/2.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/2.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/2.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="clearfix"> </div>
                      </div>
                    </div>
                  </div>
                  <h4><a href="single.html">任务：收购金色挂灯</a></h4>
                  <p>为平淡的生活增加几分味道</p>
                  <div class="new-collections-grid1-left simpleCart_shelfItem">
                    <p><i>￥680</i> <span class="item_price">￥300</span>
                      <a class="item_add" href="single.html">详 情</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="new-collections-grid1-sub">
                <div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
                  <div class="new-collections-grid1-image">
                    <a href="single.html" class="product-image"><img src="./images/9.jpg" alt=" " class="img-responsive" /></a>
                    <div class="new-collections-grid1-image-pos">
                      <a href="single.html">点击查看详情</a>
                    </div>
                    <div class="new-collections-grid1-right">
                      <div class="rating">
                        <div class="rating-left">
                          <img src="images/2.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/1.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/1.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/1.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="rating-left">
                          <img src="images/1.png" alt=" " class="img-responsive" />
                        </div>
                        <div class="clearfix"> </div>
                      </div>
                    </div>
                  </div>
                  <h4><a href="single.html">任务：出售仿古挂灯</a></h4>
                  <p>古香古色的挂灯</p>
                  <div class="new-collections-grid1-left simpleCart_shelfItem">
                    <p><i>￥280</i> <span class="item_price">￥150</span>
                      <a class="item_add" href="single.html">详 情</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="clearfix"> </div>
            </div>
          </div>
          <div class="col-md-3 new-collections-grid">
            <div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/10.jpg" alt=" " class="img-responsive" /></a>
                <div class="new-collections-grid1-image-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">任务：获取博物馆展品</a></h4>
              <p>酷爱收集仿古首饰</p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p>
                  <!--<i>$180</i> -->
                  <span class="item_price">￥1000</span>
                  <a class="item_add" href="single.html">详 情</a>
                </p>
              </div>
            </div>
            <div class="new-collections-grid1 animated wow slideInUp" data-wow-delay=".5s">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/11.jpg" alt=" " class="img-responsive" /></a>
                <div class="new-collections-grid1-image-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right">
                  <div class="rating">
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/2.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="rating-left">
                      <img src="images/1.png" alt=" " class="img-responsive" />
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">任务：香港代购金手镯</a></h4>
              <p>爱美的女人，最爱的选择</p>
              <div class="new-collections-grid1-left simpleCart_shelfItem">
                <p><i>￥3400</i> <span class="item_price">￥257</span>
                  <a class="item_add" href="single.html">详 情</a>
                </p>
              </div>
            </div>


          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
    <!-- //collections -->
    <!-- collections-bottom -->
    <div class="collections-bottom">
      <div class="container">
        <div class="collections-bottom-grids">
          <div class="collections-bottom-grid animated wow slideInLeft" data-wow-delay=".1s">
            <h3>欢迎进入 <span></span></h3>
          </div>
        </div>
        <!--<div class="newsletter animated wow slideInUp" data-wow-delay=".5s">-->
        <!--<h3>Bounty Hunter</h3>-->
        <!--<p>Join us now to get all news and special offers.</p>-->
        <!--<form>-->
        <!--<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>-->
        <!--<input type="email" value="Enter your email address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your email address';}" required="">-->
        <!--<input type="submit" value="Join Us" >-->
        <!--</form>-->
        <!--</div>-->
      </div>
    </div>
    <!-- //collections-bottom -->
  </div>
</template>

<script >
export default{

}
</script>

<style >

</style>
