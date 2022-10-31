<template>

  <div class="black-bg" v-if="showModal">
    <div class="white-bg">
      <h4>상세페이지 입니다.</h4>
      <p> 상세페이지 내용입니다.</p>
      <button @click="showModal = 'false';">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="a in menus" :key="a">{{ a }}</a>
  </div>



  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="showModal = 'true';">{{products[0]}}</h4>
    <p>{{ prices[0] }} 만원</p>
    <button @click="numberOfReports[0]++;">허위매물신고</button> 
    <span>신고수 : {{numberOfReports[0]}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{products[1]}}</h4>
    <p>{{ prices[1] }} 만원</p>
    <button @click="numberOfReports[1]++;">허위매물신고</button> 
    <span>신고수 : {{numberOfReports[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{products[2]}}</h4>
    <p>{{ prices[2]}} 만원</p>
    <button @click="numberOfReports[2]++;">허위매물신고</button> 
    <span>신고수 : {{numberOfReports[2]}}</span>
  </div>

</template>


<script>
export default {
  name: 'App',
  data(){
    return {
      showModal : false, 
      menus : ['Home','Shop','About'],
      products : ['역삼동원룸','천호동원룸','마포구원룸'],
      prices : [50,60,70],
      numberOfReports : [0,0,0]
    }
  },
  methods: {
    increase(i){
      this.numberOfReports[i] ++;
    },
  },
  components: {

  }
}
</script>


<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color:white;
  padding: 10px;
}
</style>
