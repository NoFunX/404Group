import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        SET_DATA: (state, values) => {
            state.data = values
        },

    },
    actions: {
       async GET_DATA({commit}) {
            return await axios.get('https://test-task-for-frontend.herokuapp.com/data')
        .then(response=>{
            commit('SET_DATA', response.data.items)
            return response.data.items
        })
        .catch(error=>{
            return error
        })
        }
    },
    getters: {
        DATA(state) {
            return state.data
        },
},
 })