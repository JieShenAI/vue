//仓库
import Vue from 'vue';
import Vuex from 'vuex';
//安装插件
Vue.use(Vuex);

//引入小仓库
import user from './user';
import paper from './paper'

//对外暴露仓库
export default new Vuex.Store({
    //大仓库需要注册全部小仓库
    modules: {
        paper: paper,
        user: user,
    }
})