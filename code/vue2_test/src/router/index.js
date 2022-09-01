// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import ChapterOne from '../pages/ChapterOne'
import ChapterTwo from '../pages/ChapterTwo'
import ChapterThree from '../pages/ChapterThree'
import Ch1Se1 from '../pages/papers/Ch1/Ch1Se1'


// { path: '/amap', name: '高德地图', component: () => import('./pages/amap') },

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: "ch1",
            path: "ch1",
            component: ChapterOne,
        },
        {
            name: "ch1-1",
            path: "ch1-1",
            component: Ch1Se1,
        },

        {
            name: "ch2",
            path: "ch2",
            component: ChapterTwo,
        },
        { name: "ch2-1", path: "ch2-1", component: () => import('../pages/papers/Ch2/Ch2Se1') },
        { name: "ch2-2", path: "ch2-2", component: () => import('../pages/papers/Ch2/Ch2Se2') },
        {
            name: "ch3",
            path: "ch3",
            component: ChapterThree,
        },
        { path: "/axios", component: () => import('../components/AxiosTest') },
        { path: "/echarts/demo", component: () => import('../components/EchartsDemo') },
        { name: "print", path: "/print", component: () => import('../pages/papers/OutPrint') },
    ]
})
