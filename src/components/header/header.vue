<template>
  <div id="header">
      <button v-on:click="onClickMe">点击</button>
    <!-- <div class="header-tab">{{seller.name}}</div> -->
  
  </div>
</template>

<script>
export default {
data(){
  return{
    msg: "诚中意服务"
  }
},
}
</script>

<style>
#header{
    position: relative;
    width: 100%;
    height: 134px;
    background: firebrick;
}
.header-tab{
   text-align: center;
   font-size: 30px;
}
</style>