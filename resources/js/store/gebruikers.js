import axios from 'axios'

export default {
    namespaced: true,
    state: {
        gebruikers: [],
        loading: false,
        saving: false,
        deleting:false
    },

    getters: {
        loading(state) {
            return state.loading
        },
        saving(state) {
            return state.saving
        },
    deleting(state){
            return state.deleting
    },
        gebruikers(state) {
            return state.gebruikers
        }
    },
    mutations: {
        SET_LOADING(state, value) {
            state.loading = value
        },
        SET_SAVING(state, value) {
            state.saving = value
        },
        SET_GEBRUIKERS(state, value) {
            state.gebruikers = value
        },
        SET_GEBRUIKER(state, value) {
            let index = state.gebruikers.findIndex(item => {
                return item.id == value.id
            })


            state.gebruikers[index] = value
        },
        DELETE_GEBRUIKER(state, value) {
            let index = state.gebruikers.findIndex(item => {
                return item.id == value
            })

            state.gebruikers.splice(index, 1)
        }
    },
    actions: {
        fetch({commit}) {
            commit('SET_LOADING', true)
            return axios.get('/api/gebruikers').then((response) => {

                commit('SET_LOADING', false)
                commit('SET_GEBRUIKERS', response.data)
            })
        },
        fetchOne({commit}, id) {
            commit('SET_LOADING', true)

            return axios.get('/api/gebruikers/' + id).then((response) => {
                commit('SET_LOADING', false)
                commit('SET_GEBRUIKER', response.data.data)
            })
        },
        delete({commit}, payload) {
            commit('SET_DELETING', true)
            return axios.delete('/api/gebruikers/' + payload)
                .then(response => {
                        commit('DELETE_GEBRUIKER', response.data)
                    }
                ).finally(() => {
                    commit('SET_DELETING', false)
                })
        },
        create() {
            commit('SET_SAVING', true)

            //application/json
            return axios.post('/api/gebruikers', payload)
                .then(response => {
                    commit('SET_SAVING', false)

                    commit('ADD_GEBRUIKER', response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    commit('SET_SAVING', false)
                    reject(error.request)
                })
        },
        update() {

        }
    }

}
