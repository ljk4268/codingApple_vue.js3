<template>

  <div style="padding:10px;">
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input @input="doThis($event)" placeholder="🔍" />
      <div class="post-header" v-for="a,i in follower" :key="i">
        <div class="profile" :style="`background-image:url(${a.image})`"></div>
        <span class="profile-name">{{a.name}}</span>
      </div>
    </div>
  </div>
  
</template>

<script>
import { onMounted, ref,} from 'vue';
import axios from 'axios';

export default {
  name: 'mypage',
  props: {
    one: Number,
  },
  setup(props){
    let follower = ref([]);
    let followerOriginal = ref([]);

    function doThis(event){
      let newFollower = followerOriginal.value.filter((a)=>{
        return a.name.indexOf(event.target.value) != -1
      })
      follower.value = [...newFollower]
    }
    
    onMounted(()=>{
      axios.get('/follower.json').then((a)=>{
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      })
    })

    

    return {follower,doThis}
  },
  data(){
    return{

    }
  },
}
</script>

<style>

</style>