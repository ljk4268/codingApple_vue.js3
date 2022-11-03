<template>
  <div>
    <h5>{{blogDatas[0].title}}</h5>
    <p>{{blogDatas[0].date}}</p>
  </div>
  <div>
    <h5>{{blogDatas[1].title}}</h5>
    <p>{{blogDatas[1].date}}</p>
  </div>
  <div>
    <h5>{{blogDatas[2].title}}</h5>
    <p>{{blogDatas[2].date}}</p>
  </div>
</template>

<script>
export default {
  name : 'List',
  props :{
    blogDatas : Array,
  },
  methods(){

  }
}
</script>

<style>

</style>