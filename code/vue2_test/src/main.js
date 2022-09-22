import Vue from 'vue';
import App from './App.vue';

import Header from '@/components/header';
import Footer from '@/components/footer';

Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);

//关闭Vue的生产提示
Vue.config.productionTip = false;


// ant react for vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//应用插件
Vue.use(VueRouter)


// vcharts 官网: https://v-charts.js.org/
// import VCharts from 'v-charts'
// import 'v-charts/lib/style.css'
// Vue.use(VCharts)


// echarts 百度
// import echarts from "echarts";
// 避免命名冲突
// Vue.prototype.$echarts = echarts;



//mix
import { paperMix } from './mixin'
Vue.mixin(paperMix)

// vuex
import store from './store'

/*
Vue.prototype.$paper = {
  ch1: {
  },
  ch2: {},
  ch3: {},
  ch4: {},
  ch5: {},
  ch6: {},
}*/
const vue = new Vue({
  el: '#app',
  // 事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  components: { App },
  router: router,
  store,
  render: h => h(App),
});

export default vue;