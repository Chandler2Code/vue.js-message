<template>
  <div class="order">
      <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
      </div>
      <div v-show="false">
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
         name:'小仙女',
         phone:'18382469064',
         address:'成都中医药大学13公寓',
         remark:''
        },
        rules: {
          content: [
            { required: true, message: '订单内容为必填项', trigger: 'blur' }
          ],
        }
      };
    },
    created(){
      // console.log(this.$route.params.messageId)
    },
methods:{
  submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) { 
            console.log("订单数据=",this.ruleForm);
              // this.postMessage(formName);
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
      postMessage(formName){
        this.$http.post("http://localhost:8081/serve/order/create",this.ruleForm,{emulateJSON: true})
            .then(
              (response)=>{
              response = response.body;
              this.resetForm(formName);//将表单重置
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
    }
}
</script>

<style>
.order{
    position: absolute;
    height: 100%;
    width: 100%;
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
</style>