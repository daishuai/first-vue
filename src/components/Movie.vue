<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
const movie =  {
  name: "Movie",
  // 从父组件想子组件传值
  props: ["title"]
}
export default movie
</script>

<style scoped>

</style>