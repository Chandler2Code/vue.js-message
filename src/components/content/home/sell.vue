<template>
  <div id="content-home-sell">
    <div>
    <!-- <sells></sells> -->
    </div>
    <everybottom></everybottom>
  </div>
</template>

<script>
import sells from "../home-detial/sells";
import everybottom from '../home-detial/everybottom'
export default {
    components: {
    sells: sells,
    everybottom:everybottom
  }
}
</script>

<style>
#content-home-sell{
    position: absolute;
    top: 40px;
    bottom: 46px;
    width: 98.5%;
    background: hotpink;
}
</style>