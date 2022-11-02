<template>
  <div>
    <img :src="rooms.image" class="room-img">
    <h4 @click="openModal">{{rooms.title}}</h4>
    <p>{{rooms.price}} 만원</p>
  </div>
</template>

<script>

export default {
  name : 'Card',
  props : {
    rooms : Object,
  },
  methods : {
    openModal(){
      this.$emit('openModal', this.rooms.id)
    }
  }
}

</script>

<style>

</style>