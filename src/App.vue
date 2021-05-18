<template class="bodyMargin">
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import api from "./api"
export default {
  name: 'App',
  api,
  created () {
    //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      } 

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
      this.createLogin()
  },
  methods:{
    createLogin:function(){
      axios.post('/creater_log',
      {userId:(this.$store.state.user["userName"])?this.$store.state.user["userName"]:api.ip(),msg:"登录",date:Date.now()})
      .then(response => {
        this.loginLog()
      }) 
    },
    loginLog:function(){
      axios.post('/login_log',JSON.stringify(""))
      .then(response => {
        this.$store.commit("addList",response.data)
      })
      .catch(error => {
        return error
      })
    }
  },
}
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>