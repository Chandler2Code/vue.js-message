<template>
  <div id="content-me">
    <div class="me-header">
        <img src="./home-detial/3.png" height="70" width="70" alt="">
        <p>{{userInfo.wechatName}}</p>
    </div>
    <router-link :to="{name:'addressManage',params:{address:userInfo.address,phone:userInfo.phone,
    name:userInfo.wechatName}}">
      <div class="adress">
        <img src="./img/me.png"  height="20" width="20" alt="">
        <p>地址管理</p>
      </div>
    </router-link>
    <div class="adress" v-on:click="orderManage">
      <img src="./img/email.png"  height="20" width="20" alt="">
      <p>订单管理</p>
    </div>
    <div class="adress" v-on:click="messageManage">
      <img src="./img/order.png"  height="20" width="20" alt="">
      <p>发布管理</p>
    </div>
    <div class="adress">
      <img src="./img/ask.png"  height="20" width="20" alt="">
      <p>常见问题</p>
    </div>
  </div>
</template>

<script>
var ERR_OK = 0
export default {
  data(){
      return{
          params:{
              openId:window.localStorage.getItem("openid"),
             
          },
          cancelMessage:{},
          userInfo:[],
     }
  },
  created(){
    this.getUserInfo();
  },
methods:{
  messageManage(){
   this.$router.replace({ path: '/messageManage'})
  },
  orderManage(){
     this.$router.replace({ path: '/orderManage'})
  },
   addressManage(){
    this.$router.replace({ path: '/addressManage'})
    console.log("information!")
  },
  getUserInfo(){
      this.$http.get('http://127.0.0.1:8081/serve/user/information'+
            '?openid='+this.params.openId).then(
              response => {
                response = response.body;
                if(response.code  === ERR_OK){
                this.userInfo = response.data;
                }
                // console.log("userInfo=",this.userInfo);
            });
     },
}
}
</script>

<style>
#content-me{
    position: absolute;
    top: 0px;
    bottom: 56px;
    width: 100%;
    /* background: lightblue; */
}
.me-header{
  position: relative;
  height: 150px;
  /* width: 100%; */
  vertical-align: middle;
  text-align: center;
  border-bottom: 6px solid rgba(1,17,27,0.1)
}
.me-header>*{
  margin-top: 15px;
}
.adress{
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  margin-left: 5px;
  /* width: 100%; */
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid rgba(1,17,27,0.1)
}
.adress>img{
  margin: 3px 10px 0 5px;
}
.adress>p{
height: 30px;
line-height: 30px;
}
</style>