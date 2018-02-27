<template>
  <div class="messageMana">
      <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
      </div>
      <ul>
      <li v-for="item in messages">
          <div class="messageMana-content">
                <div class="messageMana-title">
                <span v-if="item.messageStatus == '0'"><img src="./images/run.png" alt=""></span>
                <span v-else><img src="./images/stop.png" alt=""></span>
                <span>{{item.title}}</span>
            </div>
            <div class="messageMava-createTime">
               <img src="./images/time.png" alt=""> <p>{{item.createTime | formatDate}} </p>
                <p v-if="item.messageStatus == '1'">~{{item.updateTime | formatDate}}</p>
            </div>
            <p>{{item.content}}</p>
            <p>{{item.remark}}</p>
            <div v-if="item.messageStatus == '0'" class="messageMana-title-button">
               <el-button type="danger" size="mini" icon="el-icon-remove-outline" v-on:click="messageCancel(item.messageId)">结束发布</el-button>
           </div>
           </div>
      </li>
      </ul>
      <!-- <div class="messageMana-content"></div> -->
  </div>
</template>
<script>
import {formatDate} from '../../common/js/date'
var ERR_OK = 0
export default {
  
  data(){
      return{
          params:{
              openId:window.localStorage.getItem("openid"),
              messageId:''
          },
          cancelMessage:{},
          messages:[],
     }
  },
  created(){
      this.getMessageList();
  },
  methods:{
      backToHome(){
            this.$router.replace({ path: '/me'})
      },
      messageCancel(param){
          console.log(param);
          this.params.messageId = param;
          this.postMessageCancel();
      },
  getMessageList(){
      this.$http.get('http://127.0.0.1:8081/serve/message/list'+
            '?openid='+this.params.openId).then(
              response => {
                response = response.body;
                if(response.code  === ERR_OK){
                this.messages = response.data;
                }
                // console.log("services=",this.services);
            });
     },
    postMessageCancel(){
      this.$http.post("http://localhost:8081/serve/message/cancel2",this.params,{emulateJSON: true})
            .then(
              (response)=>{
                response = response.body;
                if(response.code  === ERR_OK){
                    this.getMessageList();
                }
              }, 
        );
      },
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
.messageMana{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 20;
    margin-bottom: 5%;
}
.messageMana-content{
    background: #fff;
    padding: 2% 4% 4% 4%;
    margin: 2%;
    border-radius: 5px;
    font-size: 12px;
    border-bottom: 1px solid rgba(1,17,27,0.2)
}
.back{
    display: block;
    width: 100%;
    padding-left: 5px;
    height: 40px;
    line-height: 40px;
    /* margin-bottom: 5%; */
    font-size: 16px;
    border-bottom: 1px solid rgba(1,17,27,0.1);
}
.messageMana-content>*{
    margin-top: 8px;
}
.messageMana-title{
    font-size: 20px;
    padding-bottom: 8px;
     /* border-bottom: 1px solid rgba(1,17,27,0.4) */
}
.messageMana-title-button{
    margin-left:75%;
}
.messageMava-createTime{
    display: flex;
   vertical-align:middle;
}
img{
    margin-top: -2px;
    margin-right: 2px;
}
</style>
