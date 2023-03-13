<template>
    <div>
        <h1>Music</h1>
        <router-link to="/music/chinese">华语音乐</router-link>
        <router-link to="/music/european">欧美音乐</router-link>
        <div v-for="musicInfo in musics" :key="musicInfo.id">
            <router-link :to="'/music/' + musicInfo.id">{{ musicInfo.name }}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Music',
    data: function () {
        return {
            musics: [
                {
                    id: 1,
                    name: '七里香'
                },
                {
                    id: 2,
                    name: '东风破'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>