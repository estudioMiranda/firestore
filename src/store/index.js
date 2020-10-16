import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obras: [],
    obra: {autor: '', id: ''}
    
},
mutations: {
    setObra(state, payload) {
        state.obra = payload
    },
    setObras(state, payload){
        state.obras = payload
    },
    setEliminarTarea(state, payload){
        state.obras = state.obras.filter(item => item.id !== payload)
    }
},
actions: {
    getObra({commit}, id){
        db.collection('obras').doc(id).get()
        .then(doc => {
            console.log(doc.data())
            console.log(doc.id)
            let obra = doc.data()
            obra.id = doc.id
            commit('setObra', obra)
        })
    },
    getObras({commit}){
        const obras = []
        db.collection('obras').get()
        .then(res => {
            res.forEach(doc => {
                //console.log(doc.id)
                //console.log(doc.data())
                let obra = doc.data()
                obra.id = doc.id
                obras.push(obra)
            })
            commit('setObras', obras)
        })
    },
    editObra({commit}, obra){
        db.collection('obras').doc(obra.id).update({
            autor: obra.autor
        })
        .then(() => {
            router.push({name: 'Inicio'})
        })
    },
    addObras({commit}, autor){
        db.collection('obras').add({
        autor: autor
    })
    .then(doc => {
        console.log(doc.id)
        router.push({name: 'Inicio'})
    })
    },
    deleteObra({commit, dispatch}, id){
        db.collection('obras').doc(id).delete()
        .then(() => {
            // dispatch('getTareas')
            commit('setEliminarTarea', id)
        })
    }
},
  modules: {
  }
})