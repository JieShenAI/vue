// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import ChapterOne from '../pages/ChapterOne'
import ChapterTwo from '../pages/ChapterTwo'
import ChapterThree from '../pages/ChapterThree'
//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: "ch1",
            path: "ch1",
            component: ChapterOne,
        },
        {
            name: "ch2",
            path: "ch2",
            component: ChapterTwo,
        },
        {
            name: "ch3",
            path: "ch3",
            component: ChapterThree,
        },
    ]
})
