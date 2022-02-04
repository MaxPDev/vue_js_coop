import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal= new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [ vuexLocal.plugin],
  state: {
    token : '',
    member : false,

    members : [],

    // Pour attendre que tt soit prêt (?)
    ready : false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setMember(state, member) {
      state.member = member
    },

    setMembers(state, members) {
      state.members = members
    },
    setReady(state, ready) {
      state.ready = ready
    },
  },
  getters: {
    getMember: (state) => (idMember) => {
      console.log(state.members);
      return state.members.find(member => member.id === idMember)
    }
  },
  actions: {
  },
  modules: {
  }
})
