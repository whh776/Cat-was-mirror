import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入组件库文件
import './element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 引入重置样式
import './style/reset.css'
// 引入mock.js
require('./mock.js')
Vue.config.productionTip = false

// 
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
