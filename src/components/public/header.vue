<template>
  <div>
    <el-row id="header">
        <el-col :span="6"><div id="logo">乐园</div></el-col>
        <el-col :span="6" :push=12>
            <div id="login">
                <span class="login" @click="login">登录</span>
                <span class="res" @click="res">注册</span>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'lyheader',
    methods:{
        login(){
            this.$router.push("/login")
        },
        res(){
            this.$router.push("/reg")
        }
    }
}
</script>

<style scoped>
#header{background:#303133;color:#fff;}
#header,#header>div>div{height:20vh;}
#logo{font-weight: bold;font-size:60px;text-align: center;line-height:20vh;}

#login{text-align: center;cursor:context-menu;}
#login span{display:inline-block;margin-top:10px;margin-left:10px;font-size: 12px;;}
#login span:hover{cursor:pointer;}
</style>
