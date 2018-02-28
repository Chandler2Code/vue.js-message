<template>
  <div id="content-home-service">
    <div class="content-home-services">
         <services :services="services"></services>
     <div v-if="services.length === 0"><everybottom message='亲，暂时还没有数据哟~'></everybottom></div>
     <div v-if="services.length >= 4"><everybottom message='亲，没有更多了哟~'></everybottom></div>
    </div>
  </div>
</template>

<script>
import services from "../home-detial/services";
import everybottom from '../home-detial/everybottom'
var ERR_OK = 0
export default {
  components: {
    services: services,
    everybottom:everybottom
  },
  data(){
    return{
      services:[],
      page:0,
      pageSize:15
    }
  },
  created(){
    this.getMessageList();
  },
  methods:{
    // 获取数据
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
                this.services = response.data;
                }
              
            });
        },
  // ****
  }
};
</script>

<style>
#content-home-service {
  position: absolute;
  top: 41px;
  bottom: 46px;
  width: 98.5%;
}
.aaa{
  background: red;
  z-index: 200;
}
</style>