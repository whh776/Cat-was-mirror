import Vue from 'vue';
import vueRouter from 'vue-router';

// 引入路由跳转部分
// 模型管理
import Layout from '../components/layout'
import modelManage from 'ProjectManage/modelManage'
// 用户标签
import userLog from 'ProjectManage/userAnalyze/userLog'
// 用户分群
import userGroup from 'ProjectManage/userAnalyze/userGroup'
import numberManage from 'ProjectManage/numberManage'
import numberRecord from 'ProjectManage/markManage/numberRecord'
import peopleManage from 'ProjectManage/markManage/peopleManage'
import peopleStatement from 'ProjectManage/markManage/peopleStatement'



// 登入注册
import Login from 'Page/login'
Vue.use(vueRouter);



let router = new vueRouter({
    mode: 'history',
    routes: [
        // 重定向 登入页
        {
            path: '/',
            name: '重定向登入页',
            redirect: '/login',
        },
        {
            path: '/login',
            name: '登入页',
            component: Login
        },
        {
            path: '/index',
            name: '登入页',
            component: Layout,
            // redirect:'/wel/login',
            children: [
                {
                    path: 'index',
                    name: '首页',
                    component: Layout
                },
                {
                    path: '/index/modelManage',
                    name: '模型管理',
                    component: modelManage
                },
                {
                    path: '/index/userLog',
                    name: '用户标签',
                    component: userLog
                },
                {
                    path: '/index/userGroup',
                    name: '用户组',
                    component: userGroup
                },
                {
                    path: '/index/numberManage',
                    name: '数字管理',
                    component: numberManage
                },
                {
                    path: '/index/numberRecord',
                    name: '号码卡包',
                    component: numberRecord
                },
                {
                    path: '/index/peopleManage',
                    name: '人群管理',
                    component: peopleManage
                },
                {
                    path: '/index/peopleStatement',
                    component: peopleStatement
                },
                {
                    path: '/index/peopleStatement',
                    component: peopleStatement
                },

            ]
        },



    ]
})

export default router