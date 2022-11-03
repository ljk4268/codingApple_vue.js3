<template>
  <div>
    <Post 
      :instaDatas="instaDatas[i]" 
      v-for="instaData,i in instaDatas" :key="instaData"/>
    <!-- <Post/>
    <Post/> -->
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: 'containerBox',
  components: {
    Post,
  },
  props: {
    instaDatas: Array
  }
}
</script>

<style>

</style>