<template>
    <div>
        <lyheader/> 
        <lyintroduce/>
        <lyfooter :bg="footer.bgColor" :color="footer.color"/>
    </div>

</template>
<script>
import lyheader from '../public/header.vue'
import lyfooter from '../public/footer.vue'
import lyintroduce from '../public/introduce.vue'

export default {
    name:'index',
    data() {
      return {
        footer:{bgColor:"#303133",color:"#fff"}
      };
    },
    components:{
        lyheader,
        lyintroduce,
        lyfooter
    },
    methods:{
      createLogin(){
        console.log(1)
        axios.post('/creater_log',
        {userId:(this.$store.state.user["userName"])?this.$store.state.user["userName"]:api.ip(),msg:"登录",date:Date.now()})
        .then(response => {
          this.loginLog()
        }) 
        .catch(error => {
        console.log(2)
          return error
        })
      },
      loginLog(){
        axios.post('/login_log',JSON.stringify(""))
        .then(response => {
          this.$store.commit("addList",response.data)
        })
        .catch(error => {
          return error
        })
      }
    },
    mounted(){
      let thia=this
      this.timer = setInterval(()=>{
      thia.loginLog()
      },1000)      
    },
    beforeDestory(){
      clearInterval(this.timer)  
    }
}
</script>
<style scoped>

</style>