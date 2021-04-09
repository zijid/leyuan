const store = new Vuex.Store({
    state: {
      count: 123,
      list:{},
      user:{}
    },
    mutations: {
      addList(state,data){
        state.list=data
      },
      addUser(state,data){
        state.user=data
      }
    }
  })
  export default store