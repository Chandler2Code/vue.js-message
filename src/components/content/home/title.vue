<template>
  <div id="title">
   <div class="title-tab">
     <div class="title-tab-item">
       <router-link to="/title" exact>
       服务</router-link>
    </div>
     <div class="title-tab-item">
       <router-link to="/title/sell">
       出售</router-link>
    </div>
     <div class="title-tab-item">
       <router-link to="/title/help">互助</router-link>
    </div>
   </div>
   <router-view></router-view>
  </div>
</template>

<script>
import service from '@/components/content/home/service'
export default {
  components:{
    service:service
  }

}
</script>

<style>
#title{
    position: relative;
    width: 100%;
    height: 40px;
  
}
.title-tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(1,17,27,0.1)
}
.title-tab-item{
  flex: 1;
  text-align: center;
}
.title-tab-item>a{
 display: block;
 font-size: 16px;
 color: rgb(77,85,93);
}
.title-tab-item>a.router-link-active{
  color:rgb(240, 20, 20)
}
.title-tab-item>a.router-link-exact-active{
  color:rgb(240, 20, 20)
}
</style>