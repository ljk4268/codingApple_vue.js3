<template>
  <div :class="`${filter} filter-item`" :style="{backgroundImage:`url(${imgUrl})`}">
    <slot></slot>
  </div>
  
</template>

<script>
export default {
  name: 'filterbox',
  data(){
    return {
      msg : 'hello'
    }
  },
  props: {
    imgUrl: String,
    filter: String,
  }
}
</script>

<style>
  .filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  }
</style>