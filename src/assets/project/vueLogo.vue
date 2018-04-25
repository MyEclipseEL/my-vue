<template>
  <!-- login -->
  <div class="login">
    <div class="container">
      <h3 class="animated wow zoomIn" data-wow-delay=".5s">登录注册</h3>
      <div class="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
        <form>
          <input type="email" placeholder="请输入邮箱" required=" " id="email" >
          <input type="text" placeholder="请输入用户名" required=" " >
          <input type="password" placeholder="请输入密码" required=" " >
          <div class="forgot">
            <a href="#">忘记密码?</a>
            <a href="#" style="float:right" >其他问题</a>
          </div>
          <input type="submit" value="登录" v-on:click="login" :loading="loginging">
        </form>
      </div>

    </div>
  </div>
  <!-- //login -->

</template>

<script >


export default{

      created(){
          axios.get('./cart.json')
            .then(function(res){
                console.log(res);
            },
            function(err){
                console.log(err);
            })

      }


}

</script>

<style >

</style>
