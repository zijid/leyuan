const store = new Vuex.Store({
    state: {
      list:"",
      user:"",
      Token:"",
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
      },
      addToken(state,data){
        state.Token=data
      },
      clearLogin(state){
        state.Token=""
        state.user=""
      }
    }
  })
  export default store