<template>
  <div>
    <el-row id="content">
        <el-col :span="6"><div id="list"></div></el-col>
        <el-col :span="18"><div id="read">未加载...</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'lyheader'
}
</script>

<style scoped>
#content{background:#00ccff}
#content,#content>div>div{height:60vh;}
#list{background:rgb(0, 70, 221);}
#read{background:rgb(255, 166, 0);}
</style>
