<template>

  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++;">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- <p>{{내이름}} {{age}} {{likes}}</p>

    <h4>안녕 {{ $store.state.name }} {{ $store.state.age }}</h4>
    <button @click="$store.commit('chageName')">버튼</button>
    <button @click="addAge(10)">나이버튼</button>

    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기</button> -->

    <Container 
      :instaDatas="instaDatas"
      :step="step" 
      :imgUrl="imgUrl"
      @sendText="text = $event"
      />
    <!-- <button @click="more">더보기</button> -->

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import {mapMutations, mapState} from 'vuex';
import Container from './components/Container.vue';
import instaDatas from './assets/instaDatas';
axios.get()

export default {
  name: 'App',
  data(){
    return {
      text: '',
      imgUrl: '',
      step: 3,
      instaDatas: instaDatas,
      check: 0,
      filter: '',
      선택한필터: '',
    }
  },
  mounted(){
    this.emitter.on( 'filterClick', (a)=>{
      this.선택한필터 = a;
    });
  },
  components: {
    Container,
  },
  computed: {
    name(){
      return this.$store.state.name;
    },
    ...mapState(['name','age','likes']),
    ...mapState({ 내이름:'name', }),
  },
  methods: {
    ...mapMutations(['setMore', 'changeLikes', 'addAge']),
    more(){
        axios.get(`https://codingapple1.github.io/vue/more${this.check}.json`)
        .then( result => {
          this.instaDatas.push(result.data);
          this.check ++;
        })
    },
    upload(e){
      let file = e.target.files;
      this.imgUrl = URL.createObjectURL(file[0]);
      console.log(this.imgUrl)
      this.step++;
    },
    publish(){
      let 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.text,
        filter: this.선택한필터,
      }
      this.instaDatas.unshift(내게시물);
      this.step = 0;
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
