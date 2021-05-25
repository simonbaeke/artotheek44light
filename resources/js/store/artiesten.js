import axios from 'axios'

export default {
    namespaced: true,
    state: {
        artiesten: [],
        loading: false,
        saving: false
    },

    getters: {
        loading(state) {
            return state.loading
        },
        saving(state) {
            return state.saving
        },
        artiesten(state) {
            return state.artiesten
        }
    },
    mutations: {
        SET_LOADING(state, value) {
            state.loading = value
        },
        SET_SAVING(state, value) {
            state.saving = value
        },
        SET_ARTIESTEN(state, value) {
            state.artiesten = value
        },
        SET_ARTIEST(state, value) {
            let index = state.artiesten.findIndex(item => {
                return item.id == value.id
            })


            state.artiesten[index] = value
        },
        DELETE_ARTIEST(state, value) {
            let index = state.artiesten.findIndex(item => {
                return item.id == value
            })

            state.artiesten.splice(index, 1)
        }
    },
    actions: {
        fetch({commit}) {
            commit('SET_LOADING', true)
            return axios.get('/api/artiesten').then((response) => {

                commit('SET_LOADING', false)
                commit('SET_ARTIESTEN', response.data)
            })
        },
        fetchOne({commit}, id) {
            commit('SET_LOADING', true)

            return axios.get('/api/artiesten/' + id).then((response) => {
                commit('SET_LOADING', false)
                commit('SET_ARTIEST', response.data.data)
            })
        },
        delete({commit}, payload) {
            commit('SET_DELETEING', true)
            return axios.delete('/api/artiesten/' + payload)
                .then(response => {
                        commit('DELETE_ARTIEST', response.data)
                    }
                ).finally(() => {
                    commit('SET_DELETEING', false)
                })
        },
        create() {
            commit('SET_SAVING', true)

            //application/json
            return axios.post('/api/artiesten', payload)
                .then(response => {
                    commit('SET_SAVING', false)

                    commit('ADD_ARTIEST', response.data.data)
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
