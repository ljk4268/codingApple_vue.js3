<template>
  <div>
    <img :src="rooms.image" class="room-img">
    <h4>{{rooms.title}}</h4>
    <p>{{rooms.price}} 만원</p>
  </div>
</template>

<script>
export default {
  name : 'Card',
  props : {
    rooms : Object,
  }
}
</script>

<style>

</style>