import index from '../components/index/index'
import noFile from '../components/nofile/nofile'
import login from '../components/public/login'
import reg from '../components/public/reg'
import timeMBA from '../components/timeMBA/timeMBA'
import timeMBAindex from '../components/timeMBA/index'
import grzx from '../components/timeMBA/grzx'
import phb from '../components/timeMBA/phb'
export default new VueRouter({
    mode: 'history',//要在本地访问路由 删除
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
            path:'/timeMBA',
            name:'timeMBA',
            component:timeMBA,
            children: [
                {
                  path: 'timeMBAindex',
                  name: "timeMBAindex",
                  component: timeMBAindex,
                },
                {
                  path: 'grzx',
                  name: "grzx",
                  component: grzx,
                },
                {
                  path: 'phb',
                  name: "phb",
                  component: phb,
                }
            ],
            redirect: '/timeMBA/timeMBAindex'
        
        },
        {
            path:'*',
            name:'noFind',
            component:noFile
        }
    ]
})