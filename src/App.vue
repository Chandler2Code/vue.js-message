<template>
  <div id="app">
    <!-- <v-header :seller="seller"></v-header> -->
    <!-- <v-content></v-content> -->
    <v-footer></v-footer>
   
    <router-view></router-view>
  </div>
  
</template>

<script>
import header from './components/header/header'
import footer from './components/footer/footer'
export default {
  data(){
    return{
      openid:window.localStorage.getItem("openid"),
      // seller:{
      //   name:'xxx',
      //   id:'111'
      // }
    }
  },
  components:{
    'v-header':header,
    'v-footer':footer
  },
  created()
       {
        this.getLocadStorage();
        this.$router.replace({ path: '/title'})
        // console.log(this.openid);
      },
   methods:{
      getLocadStorage(event){
          var storage = window.localStorage;
          storage.setItem("openid","xxxht4568520");
          // var openid = storage.getItem("openid");
          // var url = window.location.href;
          // console.log("url=",url);
      },

      
   }
}
</script>

<style>

</style>
