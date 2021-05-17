<template>
<div>
  <el-row :gutter="0" id="one_view">
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="el_nav" mode="horizontal" 
      background-color="#666" text-color="#fff" active-text-color="yellow">
        <el-menu-item index="0">Time首页</el-menu-item>
        <el-menu-item index="2">个人中心</el-menu-item>
        <el-menu-item index="3">排行榜</el-menu-item>
        <el-menu-item index="4" @click="toIndex">返回首页</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <el-row :gutter="0" id="two_view">
    <el-col :span="16" class="left">
      <div class="phb">
          <h2>上周学习时间排行</h2>
          <ul>
            <li><span class="one">1.</span><span class="oneName" title="我是一个长名字八九十">我是一个长名字八九十</span><span class="oneTime">上周学了1时6分钟</span></li>
            <li><span class="two">2.</span><span class="twoName" title="昵称2">昵称2</span><span class="twoTime">上周学了1时4分钟</span></li>
            <li><span class="three">3.</span><span class="threeName" title="昵称3">昵称3</span><span class="threeTime">上周学了57分钟</span></li>
          </ul>
      </div>
      <div class="gr">
          <h2>我的学习总览</h2>
          <ul>
            <li><span class="one">本周学习时间：</span><span class="oneTime">1时6分钟</span></li>
            <li><span class="two">上周学习时间：</span><span class="twoTime">1时4分钟</span></li>
            <li class="gd"><a href="#">记录更多学习</a></li>
          </ul>
      </div>
    </el-col>
    <el-col :span="8" class="right">
      
        <div v-if="!tonken" id="res">
          未登录请<span onselectstart="return false;" @click="res">注册</span>
          
        </div>
        <div id="user" v-else>
          <span onselectstart="return false;">退出登录</span>
          <div id="avatar">
            <span>user</span>
          </div>
          <h1>昵称：努力的虫虫</h1>
          <p id="qm" @blur="blur_editor">坚持学习，未来会看到变化，填充字填充字填充字填充字填充字填充字填充字填充字填充字填充字填充字填充字填充字填充字填充字 <i class="el-icon-edit" @click="editor" style="cursor: pointer;"></i></p>
        </div>
    </el-col>
  </el-row>
  <lyfooter id="three_view" :bg="footer.bgColor" :color="footer.color"/>


  <div id="date" v-if="false">
      <div class="block">
          <span class="demonstration">开始时间</span>
          <el-date-picker v-model="dateStart" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
      </div>

      <div class="block">
          <span class="demonstration">结束时间</span>
          <el-date-picker v-model="dateEnd" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
      </div>
      <span>学习时间</span> <el-input v-model="studyTime" placeholder="请输入内容"></el-input>
  </div>
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
        tonken:undefined
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
      reg(){
        console.log(this.$store.state.user)
      }
    },
    components:{
      lyfooter
    },
    computed:{
        dateEnd(){
            return this.dateStart+this.studyTime*1000*60
        }
    }
  };
</script>
<style scoped>
#date{width:50vw;}
.el-input{width:200px;}
.el-menu.el-menu--horizontal{border: none;}
#two_view{height:calc( 90vh - 60px );}
#two_view .left{ background:#424242;height:100%;padding:20px;}
#two_view .left>div{width:48%;min-height:80px;background:#666;float:left;box-shadow:4px 5px 0px 0px #a2a2a2;box-sizing: border-box;padding:20px;}
#two_view .left>div:first-child{margin-right:4%;}
#two_view .left>div h2{padding-left:20px;color:#fff;}
#two_view .left>div ul li span:nth-child(1),#two_view .left>div ul li span:nth-child(2){font-weight: bold;}
#two_view .left>div ul li span:nth-child(3){display: block;font-size: 12px;text-align: right;}
#two_view .left>div ul li {color:#fff;list-style: none;}
#two_view .left .phb ul li:nth-child(1){font-size:1.2em}
#two_view .lef .phb ul li:nth-child(2){font-size:1.1em}
#two_view .left .phb ul li:nth-child(3){font-size:1em;}
#two_view .left .phb ul li::after{display:block;content:" ";height:1px;background: #fff;width: 80%;margin: 2px auto;}
#two_view .left .gr .gd{text-align: right;}
#two_view .left .gr .gd a{text-decoration: none;}
#two_view .left .gr .gd a::before{content:">"}
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