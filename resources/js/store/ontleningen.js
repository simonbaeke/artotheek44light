import axios from 'axios'

export default {
    namespaced: true,

    state: {
        ontleningen: [],
        loading: false,
        deleteing: false
    },

    getters: {
        loading(state) {
            return state.loading
        },
        deleteing: function (state) {
            return state.deleteing
        },

        ontleningen(state) {
            return state.ontleningen
        },

        ontlening: (state) => (id) => {
            return state.ontleningen.find(k => k.id === id)
        }

    },

    mutations: {
        SET_LOADING(state, value) {
            state.loading = value
        },
        SET_DELETEING(state, value) {
            state.deleteing = value
        },

        SET_ONTLENINGEN(state, value) {
            state.ontleningen = value
        },

        SET_ONTLENING(state, value) {


            let index = state.ontleningen.findIndex(item => {
                return item.id == value.id
            })


            state.ontleningen[index] = value

        },
        DELETE_ONTLENING(state,value){
            let index = state.ontleningen.findIndex(item => {
                return item.id == value
            })

            state.ontleningen.splice(index, 1)

        }
    },

    actions: {


        fetch({commit}) {


            commit('SET_LOADING', true)
            return axios.get('/api/ontleningen').then((response) => {

                commit('SET_LOADING', false)
                commit('SET_ONTLENINGEN', response.data.data)
            })


        },
        fetchOne({commit}, id) {
            commit('SET_LOADING', true)

            return axios.get('/api/ontleningen/' + id).then((response) => {
                commit('SET_LOADING', false)
                commit('SET_ONTLENING', response.data.data)
            })
        },
        update({commit}, payload) {
            commit('SET_LOADING', true)
        },
        updateEnddate({commit}, payload) {
            commit('SET_LOADING', true)
            return axios.post('/api/expires/' + payload.id, {
                _method: 'put',
                date: payload.date
            }).then(response => {
                this.dispatch('ontleningen/fetchOne', response.data.data.expirable_id);
            })
        },
        delete({commit}, payload) {
            commit('SET_DELETEING', true)
            return axios.delete('/api/ontleningen/' + payload)
                .then(response => {
                         commit('DELETE_ONTLENING',response.data)
                    }
                ).finally(()=>{
                commit('SET_DELETEING', false)
            })

        }

    }
}
