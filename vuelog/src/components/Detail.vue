<template>
  <div>
    <h4>상세페이지임</h4>
    <h5>{{blogDatas[$route.params.id].title}}</h5>
    <p>{{blogDatas[$route.params.id].content}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props :{
    blogDatas : Array,
  },
}
</script>

<style>

</style>