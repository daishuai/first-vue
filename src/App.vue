<template>
    <div id="app">
        <VuexCount/>
        <Movie v-for="movie in movies" :key="movie.id" :title="movie.name"></Movie>
        <router-link to="/music">音乐</router-link>

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>

import Movie from './components/Movie.vue'
import VuexCount from "@/components/VuexCount.vue";

export default {
    name: 'App',
    components: {
        VuexCount,
        Movie
    },
    data: function () {
        return {
            movies: [
                {'id': 1, 'name': '金刚狼1'},
                {'id': 2, 'name': '金刚狼2'},
                {'id': 3, 'name': '金刚狼3'},
            ]
        }
    },
    created: function () {
        console.log('App组件被创建时调用')
        // 注意this关键词, lambda表达式中this
        this.$http.get('/auth/resources_as_tree', {
            params: {
                username: 'super_admin'
            }
        }).then(function (response) {
            // 处理成功情况
            console.log(response)
        }).catch(function (error) {
            // 处理错误情况
            console.log(error)
        }).then(() => {
            this.movies = []
        })
    },
    mounted: function () {
        console.log('App组件被挂载时调用')
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
