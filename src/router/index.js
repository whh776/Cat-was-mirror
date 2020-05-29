import Vue from 'vue';
import vueRouter from 'vue-router';

// 引入路由跳转部分
// 模型管理
import modelManage from '../components/content/projectManage/modelManage'
// 用户标签
import userLog from '../components/content/projectManage/userAnalyze/userLog.vue'
// 用户分群
import userGroup from '../components/content/projectManage/userAnalyze/userGroup.vue'
import numberManage from '../components/content/projectManage/numberManage'
import numberRecord from '../components/content/projectManage/markManage/numberRecord.vue'
import peopleManage from '../components/content/projectManage/markManage/peopleManage.vue'
import peopleStatement from '../components/content/projectManage/markManage/peopleStatement.vue'
Vue.use(vueRouter);



let router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/modelManage',
            component: modelManage
        },
        {
            path: '/userLog',
            component: userLog
        },
        {
            path: '/userGroup',
            component: userGroup
        },
        {
            path: '/numberManage',
            component: numberManage
        },
        {
            path: '/numberRecord',
            component: numberRecord
        },
        {
            path: '/peopleManage',
            component: peopleManage
        },
        {
            path: '/peopleStatement',
            component: peopleStatement
        },
    ]
})

export default router