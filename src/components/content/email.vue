<template>
<div class="MessageCreate">
  <div class="email-title">
    <p>发布消息</p>
  </div>
  <div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" id="el-form">
      <el-form-item label="消息类别" prop="type">
        <el-select v-model="ruleForm.messageType" placeholder="请选择消息类别">
          <el-option label="服务" value="0"></el-option>
          <el-option label="出售" value="1"></el-option>
          <el-option label="互助" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="发布内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item label="备注说明" prop="remark">
        <el-input v-model="ruleForm.remark" placeholder="备注说明，选填"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submitForm('ruleForm')">立即发布</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</div>
</div>
</template>
<script>

var ERR_OK = 0;
export default {
    data() {
      return {
        ruleForm: {
          openId:window.localStorage.getItem("openid"),
          title: '',
          messageType: '',
          content: '',
          phone:'',
          remark:''
        },
        messageId:{},
        rules: {
          title: [
            { required: true, message: '请输入发布标题', trigger: 'blur' },
            { min: 1, max: 5, message: '标题过长，5个字以内', trigger: 'blur' }
          ],
          messageType: [
            { required: true, message: '请选择活动消息类别', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请填写消息内容', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入联系方式', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      // 提交数据
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) { 
             
              this.postMessage(formName);
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 充值数据
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // post提交数据
      postMessage(formName){
        this.$http.post("http://localhost:8081/serve/message/create",this.ruleForm,{emulateJSON: true})
            .then(
              (response)=>{
              response = response.body;
              this.resetForm(formName);//将表单重置
              if(response.code === ERR_OK){
                 this.success();
                 this.go(this.ruleForm.messageType);
                 var messageId = response.data.messageId;
                //  console.log("messageId=",messageId);前端会返回一个订单号用于微信支付
              }
              },
              (error)=>{
                console.log(error);
              }
        );
      },
      // 提交成功提示
      success() {
        this.$message({
          message: '消息发布成功！',
          type: 'success'
        });
      },
      //提交后页面跳转
      go(type){
        if(type === '1'){
          this.$router.replace({ path: '/title/sell'})
        }
        else if(type === '0'){
          this.$router.replace({ path: '/title'})
        }
        else{
          this.$router.replace({ path: '/title/help'})
        }
       },
      //
    }
  }
</script>

<style>
/* 最外层边框样式 */
.MessageCreate{
  /* padding-top: 5%; */
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
}
#el-form{
  margin-top: 5%;
  margin-right: 5%;
}
.email-title{
  position: relative;
  margin-top: 10%;
  margin-bottom: 5%;
  font-size: 20px;
  text-align: center;
}
</style>