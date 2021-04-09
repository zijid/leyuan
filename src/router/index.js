import index from '../components/index/index'
import noFile from '../components/nofile/nofile'
import login from '../components/public/login'
import reg from '../components/public/reg'
export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'index',
            component:index
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/reg',
            name:'reg',
            component:reg
        },
        {
            path:'*',
            name:'noFind',
            component:noFile
        }
    ]
})