<template>
  <div class="order">
      <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
      </div>
      <div class="order-title">
          <div>标题：代取快递</div>
          <div>内容：代取校园周边各大快递，送至寝室</div>
          <div>备注：只服务于11公寓</div>
      </div>
      <div class="order-form">

<el-form :model="ruleForm" :rules="rules" ref="ruleForm"label-position="top"
 label-width="100px" class="demo-ruleForm">
  <el-form-item label="订单内容" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" :autosize="{ minRows: 2, maxRows: 5}"></el-input>
  </el-form-item>
    <el-form-item>
        <el-button type="danger" @click="submitForm('ruleForm')">提交订单</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
</el-form>
      </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        ruleForm: {
          desc: ''
        },
        rules: {
          desc: [
            { required: true, message: '订单内容为必填项', trigger: 'blur' }
          ]
        }
      };
    },
methods:{
    backToHome(){
        this.$router.replace({ path: '/title'})
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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
.order-title>*{
    margin-top: 5px;
    font-size: 10px;
}
.order-form{
    padding: 0 5% 0 5%;
}
</style>