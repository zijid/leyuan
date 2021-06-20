<template>
  <div>
    <el-row id="header">
        <el-col :span="6"><div id="logo">乐园</div></el-col>
        <el-col :span="6" :push=12>
            <div id="login" v-if="token!==200">
                <span class="login" @click="login">登录</span>
                <span class="res" @click="res">注册</span>
            </div>
            <div id="login" v-else>
                <span class="login">{{user.userName}}</span>
                <span class="res" @click="esc">退出登录</span>
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
        },
        esc(){
            this.$store.commit("clearLogin")
        }
    },
    computed:{
        token(){
            return this.$store.state.Token.state
        },
        user(){
            return {userName:this.$store.state.user["userName"],signature:this.$store.state.user["signature"]}
        }
    },
    mounted(){
        
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
