axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers={//application/x-www-form-urlencoded
//     // 'Access-Control-Allow-Origin':'*',  //解决cors头问题
//     // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' //将表单数据传递转化为form-data类型
// }
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
