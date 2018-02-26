<template>
  <div id="evereybottom">
    {{message}}
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
    /* margin-top: 5px; */
    margin:0 auto;
    text-align: center;
    width: 96%;
    height: 100px;
    /* background: #eee; */
    border-bottom: 1px solid rgba(1,17,27,0.1)
}
</style>