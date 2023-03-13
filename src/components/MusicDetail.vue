<template>
    <div>
        <h1>音乐详情 {{ id }}</h1>
        <h2>{{ $route.params.id }}</h2>
    </div>
</template>

<script>
export default {
    name: "MusicDetail",
    props: ["id"]
}
</script>

<style scoped>

</style>