<template>
  <div class="orderMana">
      <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
      </div>
      <div class="order-content">
        
      </div>
  </div>
</template>
<script>
export default {
   methods:{
      backToHome(){
            this.$router.replace({ path: '/me'})
      },
   }
}
</script>
<style>
.orderMana{
   position: absolute;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 20;
    margin-bottom: 5%;
}
.back{
    display: block;
    width: 100%;
    padding-left: 5px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    border-bottom: 1px solid rgba(1,17,27,0.1);
}
.order-content{
    background: #fff;
    padding: 2% 4% 4% 4%;
    border-radius: 5px;
    font-size: 12px;
    border-bottom: 1px solid rgba(1,17,27,0.2)
}
</style>
