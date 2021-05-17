<template>
  <div class="footer" :style="{background:bg}">
      <div :style="{color:color}">
        <p>备案信息:<span>XXXXXXXXX</span></p>
        <p>联系我们:178XXXXXX</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'lyfooter',
    props:{
      color:{
        type:String,
        default:"#fff"
      },
      bg:{
        type:String,
        default:"#666"
      }
    }
}
</script>

<style scoped>
.footer{height:10vh;}
.footer>div{padding-top: calc( 5vh - 22px);}
p{margin:0;padding:0 0 10px 0;font-size:12px;text-align: center;}
span{cursor: pointer;}


</style>