import axios from 'axios'

export default {
    namespaced: true,

    state: {
        kunstwerken: [],
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

        kunstwerken(state) {
            return state.kunstwerken
        },

        kunstwerk: (state) => (id) => {
            return state.kunstwerken.find(k => k.id === id)
        }

    },

    mutations: {
        SET_LOADING(state, value) {
            state.loading = value
        },
        SET_SAVING(state, value) {
            state.saving = value
        },

        SET_KUNSTWERKEN(state, value) {
            state.kunstwerken = value
        },

        SET_KUNSTWERK(state, value) {


            let index = state.kunstwerken.findIndex(item => {
                return item.id == value.id
            })


            state.kunstwerken[index] = value

        },
        ADD_ARTWORK(state, value) {
            state.kunstwerken.push(value)
        }
    },

    actions: {


        fetch({commit}) {


            commit('SET_LOADING', true)
            return axios.get('/api/artworks').then((response) => {
                commit('SET_LOADING', false)
                commit('SET_KUNSTWERKEN', response.data)
            })


        },
        fetchOne({commit}, id) {
            commit('SET_LOADING', true)

            return axios.get('/api/artworks/' + id).then((response) => {
                commit('SET_LOADING', false)
                commit('SET_KUNSTWERK', response.data)
            })
        },
        //CREATE

        create({commit}, payload) {
            commit('SET_SAVING', true)

            const config = {
                headers: {'content-type': 'multipart/form-data'}
            }

            //application/json
            return axios.post('/api/artworks', payload, config)
                .then(response => {
                    commit('SET_SAVING', false)

                    console.log(response)
                    commit('ADD_ARTWORK', response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    commit('SET_SAVING', false)
                    reject(error.request)
                })

        },
        //UPDATE
        update({commit}, payload) {

            console.log(payload.data)
            commit('SET_SAVING',true)
            return axios.post('/api/artworks/' + payload.id,payload.data )
                .then(response => {
                    commit('SET_SAVING',false)
                    commit('SET_KUNSTWERK',response.data.data)
                })
                .catch(error=>{
                    console.log('error')
                    commit('SET_SAVING',false)
                })
        }


    }
}
