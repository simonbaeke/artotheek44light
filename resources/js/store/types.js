import axios from 'axios'

export default {
    namespaced: true,
    state:{
        types:[],
        loading:false
    },

    getters:{
        loading(state){
            return state.loading
        },
        types(state){
            return state.types
        },
        typeCode(state,id){
            return state.types.find(type=>{
               return  type.id==id
            })
        }
    },
    mutations:{
        SET_LOADING(state, value) {
            state.loading = value
        },
        SET_TYPES(state,value){
            state.types = value
        },
        SET_TYPE(state,value){
            let index = state.types.findIndex(item => {
                return item.id == value.id
            })


            state.types[index] = value
        },
        DELETE_TYPE(state,value){
            let index = state.types.findIndex(item => {
                return item.id == value
            })

            state.types.splice(index, 1)
        }
    },
    actions:{
        fetch({commit}){
            commit('SET_LOADING', true)
            return axios.get('/api/types').then((response) => {

                commit('SET_LOADING', false)
                commit('SET_TYPES', response.data.data)
            })
        },
        fetchOne({commit},id){
            commit('SET_LOADING', true)

            return axios.get('/api/types/' + id).then((response) => {
                commit('SET_LOADING', false)
                commit('SET_TYPE', response.data.data)
            })
        },
        delete({commit},payload){
            commit('SET_DELETEING', true)
            return axios.delete('/api/types/' + payload)
                .then(response => {
                        commit('DELETE_TYPE',response.data)
                    }
                ).finally(()=>{
                    commit('SET_DELETEING', false)
                })
        },
        update(){

        }
    }

}

