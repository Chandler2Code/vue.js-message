<template>
  <div id="content-home-help">
    <div>
    <helps></helps>
    </div>
    <everybottom></everybottom>
  </div>
 
</template>

<script>
import helps from "../home-detial/helps";
import everybottom from '../home-detial/everybottom'
export default {
    components: {
    helps: helps,
    everybottom:everybottom
  }
}
</script>

<style>
#content-home-help{
 position: absolute;
  top: 40px;
  bottom: 46px;
  width: 98.5%;
}
</style>