import Music from '@/components/Music.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 定义一些路由
const routes = [
    {
        path: '/music',
        component: Music
    }
]

// 创建路由实例并传递 'routes' 配置
const router = new VueRouter({
    routes // 缩写, 相当于routes: routes
})

export default router