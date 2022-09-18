import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Header from '@/components/header';
import Footer from '@/components/footer';
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);



//注册路由功能
import router from './router';
//注册仓库功能
// import store from './store';



import { Button, Row, Col, MessageBox, Message, Input } from 'element-ui';
//element-ui大多数组件，注册为全局组件Vue.component|Vue.use
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input)
Vue.prototype.$msgbox = MessageBox;
//消息提示框
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;


new Vue({
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
  },
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
