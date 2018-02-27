<template>
  <div id="footer">
   <div class="footer-tab">
     <div class="footer-tab-item">
        <router-link to="/title">
       <i class="iconfont icon-home" ></i>
       <p>首页</p>
       </router-link>
    </div>
     <div class="footer-tab-item">
       <router-link to="/email">
         <i class="iconfont icon-email"></i>
       <p>发布</p>
       </router-link> 
    </div>
     <div class="footer-tab-item">
       <router-link to="/me">
         <i class="iconfont icon-me"></i>
       <p>我的</p>
       </router-link>
    </div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#footer{
    position:fixed;
    left: 0;
    bottom: 0;
    height: 56px;
    width: 100%;
    background: #fff;
    border-top: 1px solid rgba(1,17,27,0.1);
    z-index: 10;
}
.footer-tab{
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 56px;
  line-height: 10px;
 
}
.footer-tab-item{
  flex: 1;
  text-align: center;
}
.footer-tab-item>a{
 display: block;
 font-size: 12px;
 color: rgb(77,85,93);
}
.footer-tab-item>a>p{
  margin-top: 5px;
}
.footer-tab-item>a.router-link-active{
  color:rgb(240, 20, 20)
}
</style>