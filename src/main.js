import App from './App'
import router from './router'
import store from './vuex'
import './axios'
import api from "./api"
Vue.filter('dateShow', function (val) {
  const date = new Date(val);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
)
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  api,
  beforeCreate:()=>{
      axios.post('/creater_log',{userId:api.ip(),msg:"登录",date:Date.now()}).then(response => {
        
      })
      axios.post('/login_log',JSON.stringify(""))
      .then(response => {
          store.commit("addList",response.data)
      })
      .catch(error => {
        return error
      })
  },
  render: h => h(App)
})