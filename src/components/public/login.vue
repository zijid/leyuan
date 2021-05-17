<template>
<div id="box">
    <div id="login">
      <el-form :model="form" status-icon :rules="rules">
        <h1>登录</h1>        
        <el-form-item prop="user">
          <el-input label-position="left" v-model="form.user" placeholder="请输入账号"><template slot="prepend">账号</template></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input placeholder="请输入密码" type="password" show-password v-model="form.pass" ><template slot="prepend">密码</template></el-input>
        </el-form-item>
        <div style="text-align:right"><router-link to="reg"><span>注册</span></router-link><span href="" target="_blank">找回密码</span></div>
      <div class="login"><el-button type="primary" :loading="false" class="login_button" @click="login">登录</el-button></div>
    </el-form>    
    </div>
  
</div>
</template>

<script>

export default {
  computed:{

  },
  data() {
      let is_user = (rule, value, callback) => {
        if((value.length>0)&&(value.length<15)&&(/^[A-Za-z0-9]+$/.test(value))){
            callback()
        }else{
          callback(new Error("请输入正确账号，账号由1~14字母和数字组成"))
        }
      };
      let is_pass = (rule, value, callback) => {
        if((value.length>0)&&(value.length<21)&&(/^[A-Za-z0-9]+$/.test(value))){
            callback()
        }else{
          callback(new Error("请输入正确密码，密码由1~20字母和数字组成"))
        }
      };
      return {
      form:{
        user:"",
        pass:"",
        email:""
      },
      rules: {
          user: [
            {validator: "", trigger: 'blur' },
            {validator: is_user, trigger: 'blur' }
          ],
          pass: [
            { validator: is_pass, trigger: 'blur' }
          ]
        }
      }
  },
  methods:{
    login(){
      let users=this.$store.state.user;
      for(var a=0;a<users.length;a++){
       if(users[a].name==this.form.user&&users[a].pass==this.form.pass)
          console.log(users[a])

     }
    }

  },
  mounted(){
      axios.get('/repeatName')
      .then(response => {
        this.$store.commit("addUser",response.data)
      })
      .catch(error => {
        return error
      })
  }
}
</script>

<style scoped>
#box{width:100vw;height:100vh;background:cornflowerblue;padding:calc(50vh - 180px ) calc(50vw - 300px ) 0;box-sizing: border-box;}
#box>div{width:600px;height:360px;background:#fff;box-shadow: 0px 1px 6px 0px #d4d4d4;padding:10px 80px;box-sizing: border-box;}
#login>div{margin:10px auto;text-align: center;}
.login{ text-align: center;}
.el-button{width:100px;}
.el-link{font-size: 12px;margin-right: 10px;}
span{font-size: 12px;margin-left:10px;}
span:hover{text-decoration:underline;color:lightskyblue;cursor: pointer;}

</style>