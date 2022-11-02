<template>
  <div class="black-bg" v-if="showModal">
    <div class="white-bg">
      <img :src="rooms[clickProduct].image" class="room-img">
      <h4>{{rooms[clickProduct].title}}</h4>
      <p> {{rooms[clickProduct].content}}</p>
      <input v-model.number="month">
      <p> {{month}}개월 선택함 :  {{rooms[clickProduct].price * month}}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Modal',
  data(){
    return {
      month : 1,
    }
  },
  // 데이터감시
  watch : {
    month(a){
      if ( typeof(a) == 'string' ){
        alert('숫자만 입력하세요.');
        this.month = 1;
      }
    }
  },
  props : {
    rooms : Array,
    clickProduct : Number,
    showModal : Boolean
  }

}
</script>

<style>

</style>