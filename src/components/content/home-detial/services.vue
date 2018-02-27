<template>
<div>
  <div>
    <ul>
        <li v-for="item in services">
          <div class="services">
            <div class="services-title">
              <div>
                <img src="./3.png" height="36" width="36" alt="">
              </div>
              <div class="services-title-name">
              <p>{{item.name}} 发布于:{{item.createTime | formatDate}}</p>
              </div>
            </div>
            <div class="services-content">
              <p>标题：{{item.title}}</p>
              <p>内容：{{item.content}}</p>
              <p>备注：{{item.remark}}</p>
            </div>
            <div class="services-button">
              <router-link :to="{name:'order',params:{title:item.title,remark:item.remark,
              content:item.content,phone:item.phone,messageId:item.messageId}}">
               <el-button type="success" size="mini" round>找Ta帮忙</el-button>
               </router-link>
           </div>
          </div>
          
        </li>
      
      </ul>
  </div>
</div>
</template>

<script>
import {formatDate} from '../../../common/js/date'
var ERR_OK = 0
export default {
  data() {
    return{
     orderShow:false,
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
     console.log(param)
     this.$router.replace({ path: '/order'})
    this.orderShow = true;
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
.services{
    position: relative;
    background: #fff;
    padding: 2% 4% 4% 4%;
    border-radius: 5px;
    font-size: 12px;
    width:93.5%;
    border-bottom: 1px solid rgba(1,17,27,0.2);
}
.services-title{
  font-size:15px;
  display: flex;
  flex-direction: row;
}
.services-title-name>p{
  line-height: 15px;
  margin-top: 10px;
  margin-left: 8px;
}
.services-content{
  margin-top: 10px;
  padding: 5px;
  /* border: 1px solid rgba(1,17,27,0.2); */
  border-radius: 5px;
}
.services-content>p{
line-height: 15px;
}
.services-button{
  margin-left: 75%;
}
</style>