<template>
  <div>
    <!-- breadcrumbs -->
    <div class="breadcrumbs">
      <div class="container">
        <ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
          <li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
          <li class="active">发布任务</li>
        </ol>
      </div>
    </div>
    <!-- //breadcrumbs -->
    <!-- mail -->
    <div class="mail animated wow zoomIn" data-wow-delay=".5s">

      <div class="container"  id="box">
        <h3>发布任务</h3>

        <div class="col-md-8 mail-grid-left animated wow slideInLeft" data-wow-delay=".5s" >
          <form>
            <input type="text" value="任务名称" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '任务名称';}" required="">

            <input type="text" value="任务价格" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '任务价格';}" required="">
            <input type="text" value="联系电话" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '联系电话';}" required="">
            <textarea type="text"  onfocus="this.value = '任务描述';" onblur="if (this.value == '') {this.value = '任务描述';}" required="">任务描述：</textarea>

          </form>
          <div id="box-01">
            <input type="submit"   value="提交任务"  v-on:click="add()" >
          </div>

        </div>

        <div class="col-md-4 mail-grid-right animated wow slideInRight" data-wow-delay=".5s">
          <div class="mail-grid-right1">
            <img src="./images/3.png" alt=" " class="img-responsive" />
            <h4>张丽丽 <span>Manager</span></h4>
            <ul class="phone-mail">
              <li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>Phone: +1234 567 893</li>
              <li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>Email: <a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
            <ul class="social-icons">
              <!--<li><a href="#" class="facebook"></a></li>-->
              <li><a href="#" class="twitter"></a></li>
              <!--<li><a href="#" class="g"></a></li>-->
              <!--<li><a href="#" class="instagram"></a></li>-->
            </ul>
          </div>


        </div>
      </div>
      <!-- //mail -->

    </div>
  </div>
</template>

<script >
export default{

}
</script>

<style>

</style>
