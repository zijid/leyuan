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
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})