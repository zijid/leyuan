<template>
<div>
  <el-row :gutter="0" id="one_view">
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="el_nav" mode="horizontal" 
      background-color="#666" text-color="#fff" active-text-color="yellow">
        <el-menu-item index="0" @click="setPage('timeMBAindex')">Time首页</el-menu-item>
        <el-menu-item index="2" @click="setPage('grzx')">个人中心</el-menu-item>
        <el-menu-item index="3" @click="setPage('phb')">排行榜</el-menu-item>
        <el-menu-item index="4" @click="toIndex">返回首页</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <el-row :gutter="0" id="two_view">
      <el-col :span="16" class="left">
      <router-view></router-view>
      </el-col>
      <el-col :span="8" class="right">
          <div v-if="token!=200" id="res">
            未登录请选择<span onselectstart="return false;" @click="login">登录</span>或<span onselectstart="return false;" @click="reg">注册</span>
            
          </div>
          <div id="user" v-else>
            <span onselectstart="return false;" @click="esc">退出登录</span>
            <div id="avatar">
              <span>user</span>
            </div>
            <h1>昵称：{{user.userName}}</h1>
            <p id="qm" @blur="blur_editor">{{user.signature||"还没有签名"}} <i class="el-icon-edit" @click="editor" style="cursor: pointer;"></i></p>
          </div>
      </el-col>
  </el-row>
  <lyfooter id="three_view" :bg="footer.bgColor" :color="footer.color"/>

</div>
</template>

<script>
import lyfooter from "../public/footer"
  export default {
    data() {
      return {
        activeIndex:"1",
        dateStart: Date.now(),
        studyTime:30,
        footer:{bgColor:"#666",color:"#fff"},
        page:"index",//网页显示，默认首页 其他选项个人中心(grzx) 排行榜(phb)
        index:"index"
      };
    },
    methods:{
      toIndex(){
        this.$router.push('/')
      },
      blur_editor(){
        let el=document.getElementById("qm");
        el.style="";
        el.contentEditable=false;
      },
      editor(){
        let el=document.getElementById("qm");
        if(el.contentEditable=="true"){
          el.style="";
          el.contentEditable=false;
        }else{
          el.style="box-shadow: 1px 0px 2px 0px #fff";
          el.contentEditable=true;
        }
      },
      login(){
          this.$router.push("/login")
      },
      reg(){
          this.$router.push("/reg")
      },
      esc(){
          this.$store.commit("clearLogin")
      },
      setPage(str){
        this.$router.push(str)
      }
    },
    components:{
      lyfooter
    },
    computed:{
      dateEnd(){
          return this.dateStart+this.studyTime*1000*60
      },
      token(){
        return this.$store.state.Token.state
      },
      user(){
            return {userName:this.$store.state.user["userName"],signature:this.$store.state.user["signature"]}
        }
    },
    mounted(){
    }
  };
  /**
   * time {
   *        time:事情描述，  
   *      }
   * 保存 保存在一个数据库 一个id包含一个time 一个事情描述
   * 要创建很多表
   * 
   * 
   */
</script>
<style scoped>
#date{width:50vw;}
.el-input{width:200px;}
.el-menu.el-menu--horizontal{border: none;}
#two_view{height:calc( 90vh - 60px );}
#two_view>div .left{width: 100%;height:100%;}

#two_view .left{ background:#424242;height:100%;}
#two_view .right{ background:#666666;height:100%;padding:20px;}
#three_view{min-height:2vh;}
.el_nav li:first-child{margin-left:10vw;}

#user>span{cursor: pointer;}
#user>span:active{color:rgb(168, 168, 168);font-weight: bold;}
#avatar{width:200px;height:200px;line-height:200px;text-align:center;border-radius: 50%;background:rgb(182, 182, 182);margin:20px auto;}
/* #user p{width:20em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;} */
#user{color: #fff;}
#user p{display: inline;outline: none;}

#res{width: 100%;height: 100%;line-height: 50vh;text-align: center;color:#fff;}
#res>span{cursor: pointer;color:rgb(0, 183, 255);line-height: 100%;}
#res>span:active{color:rgb(168, 168, 168);font-weight: bold;}
#user p::before{content:"签名："}
</style>