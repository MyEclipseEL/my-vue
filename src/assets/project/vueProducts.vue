<template>

 <div>
  <!-- breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
        <li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
        <li class="active">Products</li>
      </ol>
    </div>
  </div>
  <div class="products">
    <div class="container">
      <div class="col-md-4 products-left">
        <div class="new-products animated wow slideInUp" data-wow-delay=".5s">
          <h3>最新任务发布</h3>
          <div class="new-products-grids">
            <div class="new-products-grid">
              <div class="new-products-grid-left">
                <a href="single.html"><img src="./images/food-02.jpg" alt=" " class="img-responsive" /></a>
              </div>
              <div class="new-products-grid-right">
                <h4><a href="single.html">任务：带一份咖啡+蛋糕</a></h4>
                <div class="simpleCart_shelfItem new-products-grid-right-add-cart">
                  <p> <span class="item_price">￥20</span>
                    <a class="item_add" href="single.html">
                      <router-link to="/vueSingle">详 情</router-link>
                    </a>
                  </p>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="new-products-grid">
              <div class="new-products-grid-left" >
                <a href="single.html"><img src="./images/banner-20.jpg" alt=" " class="img-responsive" style="height:150px"/></a>
              </div>
              <div class="new-products-grid-right">
                <h4><a href="single.html">任务：代购拉花咖啡</a></h4>

                <div class="simpleCart_shelfItem new-products-grid-right-add-cart">
                  <p> <span class="item_price">￥49</span><a class="item_add" href="single.html">详情 </a></p>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="new-products-grid">
              <div class="new-products-grid-left">
                <a href="single.html"><img src="./images/food-14.jpg" alt=" " class="img-responsive" /></a>
              </div>
              <div class="new-products-grid-right">
                <h4><a href="single.html">任务：沙拉甜品</a></h4>

                <div class="simpleCart_shelfItem new-products-grid-right-add-cart">
                  <p> <span class="item_price">￥45</span><a class="item_add" href="single.html">详 情 </a></p>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        <div class="men-position animated wow slideInUp" data-wow-delay=".4s">
          <a href="single.html"><img src="./images/food-07.jpg" alt=" " class="img-responsive" /></a>
          <div class="men-position-pos">
            <h4>马卡龙</h4>
            <h5><span>99.99%</span> 女生最爱</h5>
          </div>
        </div>
      </div>
      <div class="col-md-8 products-right">
        <div class="products-right-grid">
          <div class="products-right-grids-position animated wow slideInRight" data-wow-delay=".5s">
            <img src="./images/food-03.jpg" alt=" " class="img-responsive" style="width:100%;height:500px;"/>
            <div class="products-right-grids-position1">
              <h4>2018 赏金任务Top.1</h4>
              <p>法棍面包，搭配营养美容养颜的蜂蜜，坚果谷物，营养加倍,草莓水果补充丰富维生素</p>
            </div>
          </div>
        </div>
        <div class="products-right-grids-bottom">
          <div class="col-md-4 products-right-grids-bottom-grid">
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--一个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-08.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看任务</a>
                </div>
              </div>
              <h4><a href="single.html">美味虾尾</a></h4>
              <p>营养健康，能量加倍</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥325</i> <span class="item_price">￥250</span>
                  <a class="item_add" href="single.html">详 情 </a>
                </p>
              </div>
            </div>
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--两个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-09.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
              </div>
              <h4><a href="single.html">糖醋五花肉</a></h4>
              <p>酸酸甜甜，滑顺可口</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥75</i> <span class="item_price">￥50</span><a class="item_add" href="single.html">详 情</a></p>
              </div>
            </div>
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--三个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-04.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看任务</a>
                </div>
              </div>
              <h4><a href="single.html">营养快餐</a></h4>
              <p>荤素搭配，营养美味</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥45</i> <span class="item_price">￥25</span><a class="item_add" href="single.html">详 情</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 products-right-grids-bottom-grid">
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--四个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-16.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right products-right-grids-pos-right">
                  <div class="rating">

                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html"></a>草莓西米露</h4>
              <p>冷饮，甜点，休闲放松</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥28</i> <span class="item_price">￥25</span><a class="item_add" href="#">详 情</a></p>
              </div>
            </div>
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--五个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-15.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right products-right-grids-pos-right">
                  <div class="rating">
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">鸡蛋肉丝面</a></h4>
              <p>营养优惠，第二份半价</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>$50</i> <span class="item_price">$48</span><a class="item_add" href="#">详 情 </a></p>
              </div>
            </div>
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--六个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-10.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right products-right-grids-pos-right">
                  <div class="rating">
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">巧克力，奶酪披萨饼</a></h4>
              <p>甜蜜驿站，聊天约会最佳地点</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥58</i> <span class="item_price">￥48</span><a class="item_add" href="single.html">详 情 </a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 products-right-grids-bottom-grid">
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <!--八个-->
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-12.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right products-right-grids-pos-right">
                  <div class="rating">
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">法式三明治</a></h4>
              <p>营养均衡，颜值超高</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥30</i> <span class="item_price">￥25</span><a class="item_add" href="single.html">详 情 </a></p>
              </div>
            </div>
            <div class="new-collections-grid1 products-right-grid1 animated wow ">
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-13.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right products-right-grids-pos-right">
                  <div class="rating">
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">夏日水果沙拉</a></h4>
              <p>清凉一夏，热带水果</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥38</i> <span class="item_price">￥29</span><a class="item_add" href="single.html">详情 </a></p>
              </div>
            </div>
            <div class="new-collections-grid1 products-right-grid1 animated wow " >
              <div class="new-collections-grid1-image">
                <a href="single.html" class="product-image"><img src="./images/food-11.jpg" alt=" " class="img-responsive" style="width:100%;height: 200px"></a>
                <div class="new-collections-grid1-image-pos products-right-grids-pos">
                  <a href="single.html">点击查看详情</a>
                </div>
                <div class="new-collections-grid1-right products-right-grids-pos-right">
                  <div class="rating">
                    <div class="clearfix"> </div>
                  </div>
                </div>
              </div>
              <h4><a href="single.html">北京烤鸭</a></h4>
              <p>肉质酥软，肥而不腻</p>
              <div class="simpleCart_shelfItem products-right-grid1-add-cart">
                <p><i>￥58</i> <span class="item_price">￥48</span><a class="item_add" href="single.html">详情 </a></p>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
        <nav class="numbering animated wow slideInRight" data-wow-delay=".5s">
          <ul class="pagination paging">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="active"><a href="#">1<span class="sr-only">(current)</span></a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div>
  <!-- //breadcrumbs -->
  </div>
</template>

<script >

export default{

}
</script>

<style >

</style>
