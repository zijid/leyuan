<template>
<div id="box">
    <div id="reg">
    <el-form :model="form" ref="form" status-icon :rules="rules">
    <h1>注册</h1>        
    <el-form-item prop="user" :error="errorMsg">
        <el-input label-position="left" v-model="form.user" placeholder="请输入账号"><template slot="prepend">账号</template></el-input>
    </el-form-item>
    <el-form-item prop="pass">
        <el-input placeholder="请输入密码" v-model="form.pass" ><template slot="prepend">密码</template></el-input>
    </el-form-item>
    <el-form-item prop="email">
        <el-input placeholder="请输入密保邮箱" v-model="form.email" ><template slot="prepend">邮箱</template></el-input>
    </el-form-item>
    <div style="text-align:right"><router-link to="login"><span>登录</span></router-link><span href="" target="_blank">找回密码</span></div>
    <div class="reg"><el-button type="primary" :loading="logading" class="login_button" @click="reg('form')">注册</el-button></div>
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
          ],
          email:[
            { required: true, message: '请输入密保邮箱地址', trigger: 'blur' },
            { type: 'email',message: '请输入正确的邮箱地址', trigger: ['blur'] }
          ]
        },
        logading:false,
				errorMsg:""
      }
  },
  methods:{
    reg(formName){
      this.logading=true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.getUser()
					let thia=this
					thia.errorMsg=""
					setTimeout(function(){
      			let users=thia.$store.state.user;
            for(let id in users){
							let user=users[id]
              if(user.userName==thia.form.user){
									thia.logading=false;
									thia.errorMsg="账号存在，请换个账号试试"
									thia.$store.commit("regMsg",{err:true,msg:thia.errorMsg})
          				return false;
            	}
						}
						axios.post('/reg',{userName:thia.form.user,password:thia.form.pass,email:thia.form.email})
							.then(response => {
								thia.$store.commit("regMsg",response.data)
								setTimeout(function(){
									alert(`恭喜注册成功！\n账号:${thia.form.user}\n密码:${thia.form.pass}\n邮箱:${thia.form.email}`)
									thia.form.user=""
									thia.form.pass=""
									thia.form.email=""
									thia.$router.push("/")
								},500)
							})
							.catch(error => {
								return error
							})
            thia.logading=false;
          },500)
        } else {
          this.logading=false; 
          return false;
        }
      });

    },
    getUser(){
      if(!(this.$store.state.user instanceof Array)){
          axios.get('/repeatName')
            .then(response => {
              this.$store.commit("addUser",response.data)
            })
            .catch(error => {
              return error
            })
      }
    }

  },
  mounted(){
      if(!(this.$store.state.user instanceof Array)){
          axios.get('/repeatName')
            .then(response => {
              this.$store.commit("addUser",response.data)
            })
            .catch(error => {
              return error
            })
      }
      
  }
}
</script>

<style scoped>
#box{width:100vw;height:100vh;background:cornflowerblue;padding:calc(50vh - 180px ) calc(50vw - 300px ) 0;box-sizing: border-box;}
#box>div{width:600px;height:360px;background:#fff;box-shadow: 0px 1px 6px 0px #d4d4d4;padding:10px 80px;box-sizing: border-box;}
#reg>div{margin:10px auto;text-align: center;}
.reg{ text-align: center;}
.el-button{width:100px;}
.el-link{font-size: 12px;margin-right: 10px;}
span{font-size: 12px;margin-left:10px;}
span:hover{text-decoration:underline;color:lightskyblue;cursor: pointer;}

</style>