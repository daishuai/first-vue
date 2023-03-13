<template>
    <div>
        <div>{{ count }}</div>
        <button @click="increment">{{ $store.state.count }}</button>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "VuexCount",
    // computed: {
    //     count() {
    //         return this.$store.state.count
    //     }
    // },
    computed: mapState({
        count: state => state.count
    }),
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>

<style scoped>

</style>