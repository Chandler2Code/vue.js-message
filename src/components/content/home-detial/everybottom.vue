<template>
  <div id="evereybottom">
    <div class="everybottom-content">
 {{message}}
    </div>
   
  </div>
</template>

<script>
export default {
  props:['message']
}
</script>

<style>
#evereybottom{
    padding: 10px;
    position: relative;
    margin:0 auto;
    text-align: center;
    width: 96%;
    height: 100px;
    font-size: 8px;
}
.everybottom-content{
  margin-top:20px;
}
</style>