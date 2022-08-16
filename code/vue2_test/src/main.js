import Vue from 'vue';
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false;


// ant react for vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//应用插件
Vue.use(VueRouter)


// vcharts 官网: https://v-charts.js.org/
import VCharts from 'v-charts'
import 'v-charts/lib/style.css'
// import VeLine from 'v-charts/lib/line.common'
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router: router,
});