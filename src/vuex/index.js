const store = new Vuex.Store({
    state: {
      list:{},
      user:{},
      regMsg:{msg:undefined}
    },
    mutations: {
      addList(state,data){
        state.list=data
      },
      addUser(state,data){
        state.user=data
      },
      regMsg(state,data){
        state.regMsg=data
      }
    }
  })
  export default store