<template>
<div id="box">
    <div id="login">
      <el-form :model="form" status-icon :rules="rules">
        <h1>登录</h1>        
        <el-form-item prop="user" :error="errorMsg">
          <el-input label-position="left" v-model="form.user" placeholder="请输入账号" @change="getUser"><template slot="prepend">账号</template></el-input>
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
        let users=this.$store.state.user,isUser=false;
          for(let id in users){
          let formUser=this.form.user;
            if(users[id].userName==formUser||users[id].userId==formUser){
              isUser=true
            }
          }
          if((value.length>0)&&(value.length<15)&&(/^[A-Za-z0-9]+$/.test(value))){
            if(!isUser){
              callback(new Error("账号不存在！"))
            }else {
              callback()
            }
          }
          else{
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
        },
        errorMsg:""
      }
  },
  methods:{
    getUser(){
      this.errorMsg=""
      axios.get('/repeatName')
      .then(response => {
        this.$store.commit("addUser",response.data)
      })
      .catch(error => {
        return error
      })
    },
    login(){
      let users=this.$store.state.user,thia=this,state=this.$store.state;
      for(let id in users){
        let formUser=this.form.user;
        if(users[id].userName==formUser||users[id].userId==formUser){
          this.errorMsg=""
          axios.post('/loginPas',{userName:formUser,password:this.form.pass,userId:formUser})
          .then(response => {
            if(!response.data.err){
              thia.$store.commit("addToken",response.data)
              axios.post('/creater_log',{userId:thia.form.user,msg:"登录",date:Date.now()})
              //confirm(`欢迎你\n账号:${thia.form.user}`)
              thia.form.user=""
              if(this.$store.state.Token["state"]==200){
                axios.post('/userName',{token:this.$store.state.Token.token})
                .then(response => {
                this.$store.commit("addUser",response.data)
              })
            .catch(error => {
              
              confirm(`${error}`)
                return error
            })
        }
              thia.$router.back(-1)
            }else{
              confirm(`${response.data.msg}`)
            }
          })
          .catch(error => {
            return error
          })
          break;
      }
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