<template>
  <div class="addressMana">
     <div class="back" >
         <i class="el-icon-arrow-left" v-on:click="backToHome">返回</i>
    </div>
    <div class="adress-over" v-show="!addressDetailShow" v-on:click="editInfo">
         <img src="./images/add.png"  alt="">
         <br />地址为空，点击添加。
    </div>
    <div class="addressContent" v-show="addressDetailShow">
        <div class="adddress-content-title">
            <div class="adddress-content-title-item">{{params.name}}</div>
            <div class="adddress-content-title-item">{{params.phone}}</div>
        </div>
        <div class="address-content-detail">
         <img src="./images/address.png" alt="">
          {{params.address}}
        </div>
        <div class="address-content-button">
            <el-button size="mini" v-on:click="editInfo">修改</el-button>
            <el-button size="mini">删除</el-button>
        </div>
    </div>
    <div class="address-form" v-show="addressFormShow">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"label-position="top"
            label-width="100px" class="demo-ruleForm">
            <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm.address" placeholder="确保修改地址无误"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="确保联系方式无误"></el-input>
            </el-form-item>
            <el-form-item class="updateInfo-button">
                    <el-button type="danger" @click="submitForm('ruleForm')">确认提交</el-button>
            </el-form-item>
            </el-form>
      </div>
</el-form>
    </div>
  </div>
</template>
<script>
var ERR_OK = 0;
export default {
    data(){
       return{
           params:{
               address:this.$route.params.address,
               phone:this.$route.params.phone,
               name:this.$route.params.name
           },
           ruleForm: {
                openid:window.localStorage.getItem("openid"),
                address:'',
                phone:''
           },
           addressFormShow:false,
           addressDetailShow:false,
           rules: {
          address: [
            { required: true, message: '地址内容为必填', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '联系方式内容必填', trigger: 'blur' }
          ],
      }
       }
    },
    created(){
        this.DetailShow();
    },
   methods:{
      backToHome(){
            this.$router.replace({ path: '/me'})
      },
      editInfo(){
          this.addressFormShow = ! this.addressFormShow;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) { 
              this.postUserInfoUpdate(formName);
              this.$router.replace({ path: '/me'})
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      DetailShow(){
          var judgment = this.params.name;
           if(judgment != null){
               this.addressDetailShow=true;
           }

      },
      postUserInfoUpdate(formName){
        this.$http.post("http://localhost:8081/serve/user/update",this.ruleForm,{emulateJSON: true})
            .then(
              (response)=>{
              response = response.body;
              if(response.code === ERR_OK){
                 console.log("调用提交！")
              }
              },
              (error)=>{
                console.log(error);
              }
        );
      },
   }
}
</script>
<style>
.addressMana{
   position: absolute;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 25;
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
.addressContent{
    /* display: none; */
    background: #fff;
    padding: 2% 4% 4% 4%;
    border-radius: 5px;
    border-bottom: 1px solid rgba(1,17,27,0.2)
}
.adddress-content-title{
    font-size: 16px;
    font-weight: 900;
    height: 28px;
    line-height: 28px;
    display:flex;
}
.adddress-content-title-item{
    flex: 1;
    text-align:left;
}
.address-content-detail{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
}
.address-content-button{
    display: flex;
    height: 24px;
    line-height: 24px;
    margin-left: 65%;
}
.updateInfo-button{
   float: right;
}
.address-form{
    padding: 4%;
}
.adress-over{
    background: #fff;
    padding: 2% 4% 4% 4%;
    border-radius: 5px;
    border-bottom: 1px solid rgba(1,17,27,0.2);
    text-align: center;
    font-size: 10px;
}
.adress-over>img{
    margin-bottom: 3%;
}
</style>
