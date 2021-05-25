import axios from 'axios'

export default {
    namespaced: true,
    state: {
        lidkaarten: [],
        loading: false,
        saving: false
    },

    getters: {
        loading(state) {
            return state.loading
        },
        lidkaarten(state) {
            return state.lidkaarten
        },
        saving(state) {
            return state.saving
        }
    },
    mutations: {
        SET_LOADING(state, value) {
            state.loading = value
        },
        SET_SAVING(state, value) {
            state.saving = value
        },
        SET_LIDKAARTEN(state, value) {
            state.lidkaarten = value
        },
        SET_LIDKAART(state, value) {
            let index = state.lidkaarten.findIndex(item => {
                return item.id == value.id
            })


            state.lidkaarten[index] = value
        },
        DELETE_LIDKAART(state, value) {
            let index = state.lidkaarten.findIndex(item => {
                return item.id == value
            })

            state.lidkaarten.splice(index, 1)
        }
    },
    actions: {
        fetch({commit}) {
            commit('SET_LOADING', true)
            return axios.get('/api/lidkaarten').then((response) => {

                commit('SET_LOADING', false)
                commit('SET_LIDKAARTEN', response.data)
            })
        },
        fetchOne({commit}, id) {
            commit('SET_LOADING', true)

            return axios.get('/api/lidkaarten/' + id).then((response) => {
                commit('SET_LOADING', false)
                commit('SET_LIDKAART', response.data.data)
            })
        },
        delete({commit}, payload) {
            commit('SET_DELETEING', true)
            return axios.delete('/api/lidkaarten/' + payload)
                .then(response => {
                        commit('DELETE_LIDKAART', response.data)
                    }
                ).finally(() => {
                    commit('SET_DELETEING', false)
                })
        },
        create() {
            commit('SET_SAVING', true)

            //application/json
            return axios.post('/api/lidkaarten', payload)
                .then(response => {
                    commit('SET_SAVING', false)

                    commit('ADD_LIDKAART', response.data.data)
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
