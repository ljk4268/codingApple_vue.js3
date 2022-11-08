import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      likesClick: false,
      more: {},
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
    },
    setMore(state, data){
      state.more = data
    }
  },
  actions: {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    }
  }
})

export default store