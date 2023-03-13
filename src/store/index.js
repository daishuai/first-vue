import Vuex from 'vuex'
import Vue from "vue"

Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

export default store