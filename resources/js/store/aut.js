import axios from 'axios'
import router from '../router'

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null,
        title: ""
    },

    getters: {
        authenticated(state) {
            return state.authenticated
        },

        user(state) {
            return state.user
        },
        title(state) {
            return state.title
        }
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },

        SET_USER(state, value) {
            state.user = value
        },

        SET_TITLE(state, value) {
            state.title = value
        }
    },

    actions: {


        signIn({dispatch}, credentials) {


            return axios.get('/sanctum/csrf-cookie').then(() => {
                console.log('csrf')
                axios.post('/login', credentials).then(() => {

                    dispatch('me').then(()=>{
                        router.push({name:'dashboard'})
                    })
                })
            })


        },

        signOut({dispatch}) {
            return axios.post('/logout').then(() => {
                dispatch('me')
            })

        },

        me({commit}) {
            return axios.get('/api/user').then((response) => {
                console.log('set auth')

                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
        },

        setTitle({commit},title){
            commit('SET_TITLE',title)
        }
    }
}
