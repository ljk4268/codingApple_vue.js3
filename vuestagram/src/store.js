import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      likesClick: false,
    }
  },
  mutations: {
    chageName(state){
      state.name = 'Park';
    },
    addAge(state, payload){
      state.age += payload;
    },
    changeLikes(state){
      state.likesClick = !state.likesClick;
      if (state.likesClick){
        state.likes ++;
      } else {
        state.likes --;
      }

    }
  }
})

export default store