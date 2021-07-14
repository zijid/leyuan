import App from './App'
import router from './router'
import store from './vuex'
import './axios'
Vue.filter('dateShow', function (val) {
  const date = new Date(val);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
)
Vue.filter('time', function (val) {
  let ms=1000,//毫秒  1000毫秒 就是1秒
  s=ms,//秒   1000 毫秒
  m=s*60,//分钟  60秒
  h=m*60,//时  60分钟
  d=h*24//天  24时
  if(val<1000*60){//毫秒
    return val+"毫秒"
  }else if(val<ms){//秒
    return Number(val/1000).toFixed(2)+"秒"
    
  }else if(val<h){//分钟
    return Number(val/1000/60).toFixed(2)+"分钟"
    
  }else if(val<d){//时
    return Number(val/1000/60/60).toFixed(2)+"时"
    
  }else{//天 
    return Number(val/1000/60/60).toFixed(2)+"天"
  }
}
)



Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})