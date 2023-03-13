import Vuex from 'vuex'
import Vue from "vue"

Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
            name: 'lisi'
        }
    }
})

export default store