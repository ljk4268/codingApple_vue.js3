<template>

<!-- vue에서 애니메이션 주고 싶은 요소는 <transition> -->

  <Transition name="fade">
    <Modal
      @closeModal="showModal = false"
      :rooms="rooms" 
      :clickProduct="clickProduct" 
      :showModal="showModal" 
    />
  </Transition>

  <div class="menu">
    <a v-for="a in menus" :key="a">{{ a }}</a>
  </div>

  <Discount 
    v-if="showDiscount == true"
    :count="count"
  />

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card 
    @openModal="showModal = true; clickProduct = $event"
    :rooms="rooms[i]" 
    v-for="room,i in rooms" :key="room" />

</template>


<script>
import data from './data';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';



export default {
  name: 'App',
  data(){
    return {
      count : 5,
      showDiscount : true,
      roomsOrigin : [...data],
      clickProduct : 0,
      rooms : data,
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
    priceSort(){
      this.rooms.sort(function(a,b){
        return a.price - b.price;
      });
    },
    sortBack(){
      this.rooms = [...this.roomsOrigin];
    },
  },
  mounted(){
    let timer = setInterval(()=>{
      this.count --;
      if(this.count == 0){
        clearInterval(timer)
      }
    },1000)
  },

  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
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
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

/* .start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
} */
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
