<template>
  <div class="black-bg" v-if="showModal">
    <div class="white-bg">
      <h4>{{rooms[clickProduct].title}}</h4>
      <p> {{rooms[clickProduct].content}}</p>
      <p> {{rooms[clickProduct].price}}만원</p>
      <Discount/>
      <!-- <button @click="showModal = false;">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name : 'Modal',
  props : {
    rooms : Array,
    clickProduct : Number,
    showModal : Boolean
  }

}
</script>

<style>

</style>