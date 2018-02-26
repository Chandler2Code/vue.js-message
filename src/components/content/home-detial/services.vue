<template>
<div>
  <ul>
  <li v-for="item in services" v-if="item.messageType ==='0'">
   <div id="content-home-detail-service" v-on:click="createOrder(item.messageId)">
        <div class="services-header">
          <img src="./3.png" height="30" width="30" alt=""/>
            <p>{{item.name}}</p>
            <p>发布于  {{item.createTime| formatDate}}</p>
        </div>
        <div class="services-bottom">
            <p>{{item.title}}：{{item.content}}</p>
            <p>备注：{{item.remark}}</p>
        </div>
    </div>
   </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
import {formatDate} from '../../../common/js/date'
var ERR_OK = 0
export default {
  data() {
    return{
     orderShow: false,
     page:0,
     pageSize:15,
    }
  },
  props:{
    services:{
      type: Array,
        default() {
          return [];
        }
    },
  },
 methods: {
  //  显示提交订单页面
   createOrder(param){
    //  console.log(param)
     this.$router.replace({ path: '/order'})
   },
   //
   //
 },
 filters: {
   formatDate(time) {
     var date = new Date(time);
     return formatDate(date, 'yyyy-MM-dd hh:mm');
   }
 }
}
</script>

<style>
#content-home-detail-service{
    padding: 10px;
    position: relative;
    margin:0 auto;
    text-align: center;
    width: 90%;
    height: 100px;
    border-bottom: 1px solid rgba(1,17,27,0.1)
}
.services-header{
  position: relative;
  display: flex;
  height: 40px;
}
.services-header>*{
  margin-right: 5px;
}
.services-header>p{
  margin-top: 6px;
  font-size: 10px;
}
.services-bottom{
  position: relative;
  height: 60px;
  display:flex;
  flex-direction: column;
  float: left;

}
.services-bottom>p{
    text-align: left;
    font-size: 12px;
    margin-top: 10px;
 }
</style>