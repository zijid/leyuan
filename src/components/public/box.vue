<template>
  <div id="box" @click="t(link)" :style="{width:w,height:h,margin:m,background:bg_color,color:color,fontSize:size,lineHeight:h}">
      <h1 v-text="value"></h1>

  </div>
</template>

<script>
export default {
    data() {
        return {
            aa:"v"
        };
},
methods:{
    t:function(link){
        console.log(this)
        this.$router.push(link)
    }
},
props:{
    w:{
        type:String,
        default:"200px"
    },
    h:{
        type:String,
        default:"150px"
    },
    m:{
        type:String,
        default:"20px"
    },
    bg_color:{
        type:String,
        default:"#fff"
    },
    color:{
        type:String,
        default:"#666"
    },size:{
        type:String,
        default:"14px"
    },
    value:{
      type: String,
      default: "块"
    },
    link:{
      type: String,
      default:"/"
    },
  }

}
</script>

<style scoped>
#box{float: left;text-align: center;}
#box h1{margin: 0;cursor: pointer;}
#box:hover{transform:translate(1px, 1px)}
#box:hover h1{text-decoration: underline;color:rgb(48, 47, 47);}
</style>