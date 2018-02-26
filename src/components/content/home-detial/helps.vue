<template>
<div>
  <ul>
  <li v-for="item in messages" v-if="item.messageType ==='2'"> 
      <div id="content-home-detail-service" @click="createOrder">
        <div class="services-header">
          <img src="./3.png" height="30" width="30" alt=""/>
            <p>{{item.name}}</p>
            <p>发布于{{item.createTime | formatDate}}</p>
        </div>
        <div class="services-bottom">
            <p>{{item.title}}：{{item.content}}</p>
            <p>备注：{{item.remark}}</p>
        </div>
      </div>
   </li>
  </ul>
  <div v-show="orderShow" class="createOrder">
    
  </div>
</div>

</template>

<script>
import {formatDate} from '../../../common/js/date'
var ERR_OK = 0
export default {
  data() {
    return{
     messages: [],
     orderShow: false,
     busy:true,
     page:0,
     pageSize:15
    }
  },
  created() {
   this.getMessageList();
 },
 methods: {
  //  显示提交订单页面
   createOrder(event){
    this.orderShow = true;
   },
  //  获取数据
   getMessageList(){
                var param = {
                    page:this.page,
                    pageSize:this.pageSize
                }
        this.$http.get('http://127.0.0.1:8081/serve/message/all'+
        '?page='+param.page+
        '&size='+param.pageSize).then(
          response => {
            response = response.body;
            if(response.code  === ERR_OK){
            this.messages = response.data;
            }
            // console.log("messages=",this.messages);
          },
          response => {
            // error callback
          }
        );
    },
    // 加载中
    
    
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
  margin-top: 8px;
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
    margin-top: 3px;
 }
 .createOrder{
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   background: #fff;
   width: 100%;
   height: 100%;
   overflow: hidden;
 }
</style>