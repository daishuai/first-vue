<template>
  <div id="app">
    <Movie v-for="movie in movies" :key="movie.id" :title="movie.name"></Movie>
  </div>
</template>

<script>

import Movie from './components/Movie.vue'
export default {
  name: 'App',
  components: {
    Movie
  },
  data: function () {
    return {
      movies: [
        {"id": 1, "name": "金刚狼1"},
        {"id": 2, "name": "金刚狼2"},
        {"id": 3, "name": "金刚狼3"},
      ]
    }
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
