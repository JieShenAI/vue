// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件


// { path: '/amap', name: '高德地图', component: () => import('./pages/amap') },

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        { name: "MyDemo", path: "/demo", component: () => import('../pages/test/MyDemo') },
        { name: "MyTest", path: "/test", component: () => import('../pages/test/MyTest') },
        { name: "ch1-1", path: "/ch1-1", component: () => import('../pages/papers/Ch1/Ch1Se1') },
        { name: "ch2-1", path: "/ch2-1", component: () => import('../pages/papers/Ch2/Ch2Se1') },
        { name: "ch2-2", path: "/ch2-2", component: () => import('../pages/papers/Ch2/Ch2Se2') },
        { path: "/axios", component: () => import('../components/AxiosTest') },
        { path: "/echarts/demo", component: () => import('../components/EchartsDemo') },
        { name: "print", path: "/print", component: () => import('../pages/papers/OutPrint') },
    ]
})
