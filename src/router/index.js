import Music from '@/components/Music.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import ChineseMusic from "@/components/ChineseMusic.vue";
import EuropeanMusic from "@/components/EuropeanMusic.vue";
import MusicDetail from "@/components/MusicDetail.vue";

Vue.use(VueRouter)

// 定义一些路由
const routes = [
    {
        path: '/music',
        component: Music,
        children: [
            {
                path: 'chinese',
                component: ChineseMusic
            },
            {
                path: 'european',
                component: EuropeanMusic
            },
            {
                path: ':id',
                component: MusicDetail,
                props: true
            }
        ]
    }
]

// 创建路由实例并传递 'routes' 配置
const router = new VueRouter({
    routes // 缩写, 相当于routes: routes
})

export default router