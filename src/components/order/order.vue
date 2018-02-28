<template>
  <div class="order">
      <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
      </div>
      <div class="order-detail" v-show="!Notification">
       <div class="order-detail-title">{{$route.params.title}}</div>
       <div class="order-detail-content">
         <p>内容：{{ruleForm.content}}</p>
         <p>备注：{{ruleForm.remark}}</p>
         <p>收货人：{{ruleForm.name}}</p>
       </div>
       <div class="order-detial-info">
         <p>地址：{{ruleForm.address}}</p>
         <p>电话：{{ruleForm.phone}}</p>
       </div>
       <div class="order-detail-button">
        <div class="order-detail-button-item" id="order-detial-no" v-on:click="cancel">取消</div>
        <div class="order-detail-button-item" id="order-detial-yes" v-on:click="check">确认</div>
       </div>
      </div>
      <div v-show="Notification">
      <div class="order-title">
          <p>标题：{{$route.params.title}}</p>
          <p>内容：{{$route.params.content}}</p>
          <p>备注：{{$route.params.remark}}</p>
          <p>联系方式：{{$route.params.phone}}</p>
      </div>
      <div class="order-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"label-position="top"
      label-width="100px" class="demo-ruleForm">
        <el-form-item label="订单内容" prop="content">
          <el-input type="textarea"  v-model="ruleForm.content" :autosize="{ minRows: 2, maxRows: 5}"></el-input>
        </el-form-item>
        <el-form-item label="备注说明" prop="remark">
            <el-input v-model="ruleForm.remark" placeholder="按实际所需填写，选填"></el-input>
        </el-form-item>
    <div>
        <el-form-item class="order-button">
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="danger" @click="submitForm('ruleForm')">提交订单</el-button>
        </el-form-item>
      </div>
   
</el-form>
      </div>
      </div>
  </div>
</template>

<script>
var ERR_OK = 0;
export default {
     data() {
      return {
        ruleForm: {
         content: '',
         messageId:this.$route.params.messageId,
         openId:window.localStorage.getItem("openid"),
         name:'',
         phone:'',
         address:'',
         remark:''
        },
        userInfo:{},
        Notification:true,
        rules: {
          content: [
            { required: true, message: '订单内容为必填项', trigger: 'blur' }
          ],
        }
      };
    },
    created(){
     this.getUserInfo();
    
    //  console.log(this.userInfo);
    },
methods:{
  submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) { 
              this.Notification = !this.Notification;
               this.convert();
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    backToHome(){
        this.$router.replace({ path: '/title'})
    },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      postMessage(){
        this.$http.post("http://localhost:8081/serve/order/create",this.ruleForm,{emulateJSON: true})
            .then(
              (response)=>{
              response = response.body;
              // this.resetForm(formName);//将表单重置
              if(response.code === ERR_OK){
                 this.success();
                //  this.go(this.ruleForm.messageType);
                //  var messageId = response.data.messageId;
                //  console.log("messageId=",messageId);前端会返回一个订单号用于微信支付
              }
              },
              (error)=>{
                console.log(error);
              }
        );
      },
      success() {
        this.$message({
          message: '订单提交成功',
          type: 'success'
        });
      },
      check(formName){
        this.postMessage();
         this.Notification = !this.Notification;
        this.resetForm(formName);
       
        // this.$router.replace({ path: '/orderManage'})
      },
      cancel(){
        this.Notification = !this.Notification;
      },
      getUserInfo(){
      this.$http.get('http://127.0.0.1:8081/serve/user/information'+
            '?openid='+this.ruleForm.openId).then(
              response => {
                response = response.body;
                if(response.code  === ERR_OK){
                this.userInfo = response.data;
                }
                // console.log("userInfo=",this.userInfo);
            });
     },
     convert(){
      this.ruleForm.name  = this.userInfo.wechatName;
      this.ruleForm.phone  = this.userInfo.phone;
      this.ruleForm.address = this.userInfo.address;
     }
    }
}
</script>

<style>
.order{
    position: absolute;
    height: 100%;
    width: 98.5%;
    background: #fff;
    z-index: 20;
}
.back{
    display: block;
    width: 98%;
    padding-left: 5px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    font-size: 16px;
    border-bottom: 1px solid rgba(1,17,27,0.1)
}
.order-title{
    margin: 5% 5% 3% 5%;
    padding-bottom: 5%;
    border-bottom: 1px solid rgba(1,17,27,0.1)
}
.order-title>p{
    line-height: 15px;
    font-size: 10px;
}
.order-form{
    padding: 0 5% 0 5%;
}
.order-button{
  margin-left: 45%;
}
.order-detail{
    background: #fff;
    padding: 2% 4% 4% 4%;
    border-radius: 6px;
    font-size: 12px;
    margin: 0 auto;
    width:85%;
    border: 1px solid rgba(1,17,27,0.2);
}
.order-detail-title{
  font-size: 18px;
  height: 18px;
  line-height: 18px;
  /* background: red; */
  text-align: center;
}
.order-detail-content{
  margin-top: 15px;
  font-size: 12px;
}
.order-detail-content>p{
  height: 12px;
  line-height: 12px;
}
.order-detial-info{
  margin-top: 15px;
  font-size: 18px;
}
.order-detial-info>p{
  height:36px;
  line-height: 18px;
}
.order-detail-button{
  padding: 4%;
  /* background: red; */
  border-top: 1px solid rgba(1,17,27,0.5);
  height: 18px;
  line-height: 18px;
  font-size: 18px;
  display: flex;
}
.order-detail-button-item{
  flex: 1;
  text-align: center;
}
#order-detial-no{
  color: #F56C6C
}
#order-detial-yes{
 color: #67C23A;
}
</style>