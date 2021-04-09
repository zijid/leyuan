<template>
  <div id="box">
    <div id="login" v-if="page">
      <el-form :model="form" status-icon :rules="rules">
        <h1>登录</h1>        
        <el-form-item prop="user">
          <el-input label-position="left" v-model="form.user" placeholder="请输入账号"><template slot="prepend">账号</template></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input placeholder="请输入密码" type="password" show-password v-model="form.pass" ><template slot="prepend">密码</template></el-input>
        </el-form-item>
        <div style="text-align:right"><span @click="Page(false)">注册</span><span href="" target="_blank">找回密码</span></div>
      <div class="login"><el-button type="primary" :loading="false" class="login_button" @click="login">登录</el-button></div>
    </el-form>    
    </div>
    <div id="reg" v-else>
      <el-form :model="form" status-icon :rules="rules">
        <h1>注册</h1>        
        <el-form-item prop="user">
          <el-input label-position="left" v-model="form.user" placeholder="请输入账号"><template slot="prepend">账号</template></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input placeholder="请输入密码" v-model="form.pass" ><template slot="prepend">密码</template></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input placeholder="请输入密保邮箱" v-model="form.email" ><template slot="prepend">邮箱</template></el-input>
        </el-form-item>
        <div style="text-align:right"><span href="javasript:;" target="_parent" @click="Page(true)">登录</span><span href="" target="_blank">找回密码</span></div>
      <div class="login"><el-button type="primary" :loading="false" class="login_button">注册</el-button></div>
    </el-form>    
    </div>

  </div>
  
</template>

<script>

export default {
  computed:{
    aaaaa(){
      
    }
  },
  data() {
      let is_user = (rule, value, callback) => {
        value?callback():callback(new Error('请输入账号'));
      };
      let is_pass = (rule, value, callback) => {
        value?callback():callback(new Error('请输入密码'));
      };
      return {
      page:true,//ture代表登录页面，false代表注册页面
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
          ],
          email:[
            { required: true, message: '请输入密保邮箱地址', trigger: 'blur' },
            { type: 'email',message: '请输入正确的邮箱地址', trigger: ['blur'] }
          ]
        }
      }
  },
  methods:{
    Page(boolean){
      this.page=boolean;
    },
    login(){
      //console.log(new Array(this.$store.state.user))
      let users=this.$store.state.user;
       console.log()
      for(var a=0;a<users.length;a++){
       if(users[a].name==this.form.user&&users[a].pass==this.form.pass)
          console.log(users[a])

     }
    }

  },
  mounted(){
      axios.get('/static/user.json')
      .then(response => {
        this.$store.commit("addUser",response.data.info)
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