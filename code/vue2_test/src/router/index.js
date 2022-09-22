// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件


// { path: '/amap', name: '高德地图', component: () => import('./pages/amap') },

import Login from '@/pages/login';
import Register from '@/pages/register';

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        //重定向到首页
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false },
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false },
        },
        {
            name: "MyDemo", path: "/demo", component: () => import('../pages/test/MyDemo'),
            props($route) {
                return {
                    id: $route.query.id,
                }
            },
        },
        { name: "MyTest", path: "/test", component: () => import('../pages/test/MyTest') },
        { name: "PaperHome", path: "/paperHome", component: () => import('@/components/papers/PaperHome') },
        { name: "NewPaper", path: "/newPaper", component: () => import('@/components/papers/NewPaper') },
        {
            name: "paper", path: "/paper", component: () => import('@/components/papers/ShowPaper'),
            children: [
                { name: "ch1-1", path: "ch1-1", component: () => import('../pages/papers/Ch1/Ch1Se1') },
                { name: "ch2-1", path: "ch2-1", component: () => import('../pages/papers/Ch2/Ch2Se1') },
                { name: "ch2-2", path: "ch2-2", component: () => import('../pages/papers/Ch2/Ch2Se2') },
                {
                    name: "ch2-3", path: "ch2-3", component: () => import('../pages/papers/Ch2/Ch2Se3'),
                    props($route) {
                        return {
                            paperId: $route.query.paperId,
                        }
                    }
                },
                { name: "print", path: "print", component: () => import('../pages/papers/OutPrint') },
            ],
            props($route) {
                return {
                    paperId: $route.query.paperId,
                    year: $route.query.year,
                    cityId: $route.query.cityId,
                }
            }
        },
        { name: "home", path: "/home", component: () => import('@/pages/home') },
        { path: "/axios", component: () => import('../components/AxiosTest') },
        { path: "/echarts/demo", component: () => import('../components/EchartsDemo') },

    ]
})
