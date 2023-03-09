<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
const movie = {
  name: "Movie",
  // 从父组件想子组件传值
  props: ["title"],
  created: function () {
    console.log("Movie组件被创建时调用")
  },
  mounted: function () {
    console.log("Movie组件被挂载时调用")
  }
}
export default movie
</script>

<style scoped>

</style>