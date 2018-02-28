<template>
  <div class="orderMana">
      <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
      </div>
      <ul>
          <li v-for="(item,index) in orders">
              <div class="orderMana-main">
              <div v-if="index %2  == 0" class="orderMana-left1"></div>
               <div v-else class="orderMana-left2"></div>
          <div class="orderMana-content">
            <p>订单号(服务)：{{item.orderId}}</p>
            <p>创建时间：{{item.createTime | formatDate}}</p>
            <div class="orderMava-content-info-title">
                <el-collapse>
                <el-collapse-item title="显示订单详情..." name="1">
                    <div>内容:{{item.content}}</div>
                    <div>备注:{{item.remark}}</div>
                    <div>地址：{{item.address}}</div>
                </el-collapse-item>
                </el-collapse>
             </div>
          </div>
          </div>
          </li>
      </ul>
      
      </div>
</template>
<script>
var ERR_OK = 0
import {formatDate} from '../../common/js/date'
export default {
    data(){
      return{
          params:{
              openId:window.localStorage.getItem("openid"),
            //   messageId:''
          },
          cancelMessage:{},
          orders:[],
     }
  },
  created(){
      this.getOrderList();
  },
  filters: {
   formatDate(time) {
     var date = new Date(time);
     return formatDate(date, 'yyyy-MM-dd hh:mm');
   }
 },
   methods:{
      backToHome(){
            this.$router.replace({ path: '/me'})
      },
    //   handleChange(val) {
    //     // console.log(val);
    //   },
      getOrderList(){
      this.$http.get('http://127.0.0.1:8081/serve/order/list'+
            '?openid='+this.params.openId).then(
              response => {
                response = response.body;
                if(response.code  === ERR_OK){
                this.orders = response.data;
                }
                // console.log("orders=",this.orders);
            });
     },
   }
}
</script>
<style>
.orderMana{
   position: absolute;
    height: 100%;
    background: #fff;
    z-index: 20;
    width: 98.5%;
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
.orderMana-content{
    background: #fff;
    padding: 2% 4% 4% 4%;
    border-radius: 6px;
    font-size: 12px;
    /* border-bottom: 1px solid rgba(1,17,27,0.2); */
    width: 90%;
    border: 1px solid rgba(1,17,27,0.2);
    /* border-bottom:  1px solid rgba(1,17,27,0.2) */
    
}
.orderMana-content>p{
    line-height: 15px;
}
.orderMava-content-info-title{
    margin-top: 10px;
    font-size: 20px;
    border-top: 1px solid rgba(1,17,27,0.2)
}
.orderMana-main{
    display: flex;
}
.orderMana-left1{
    width: 1%;
    background: #606266;
    border-radius: 5px;
}
.orderMana-left2{
    width: 1%;
    background: #909399;
    border-radius: 10px;
}
</style>
