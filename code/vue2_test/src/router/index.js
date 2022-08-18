// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import ChapterOne from '../pages/ChapterOne'
import ChapterTwo from '../pages/ChapterTwo'
import ChapterThree from '../pages/ChapterThree'
import Ch1Se1 from '../pages/papers/Ch1/Ch1Se1'
import Ch1Se2 from '../pages/papers/Ch1/Ch1Se2'


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
            name: "ch1-2",
            path: "ch1-2",
            component: Ch1Se2,
        },
        { name: "ch1-3", path: "ch1-3", component: () => import('../pages/papers/Ch1/Ch1Se3') },
        { name: "ch1-4", path: "ch1-4", component: () => import('../pages/papers/Ch1/Ch1Se4') },
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
    ]
})
