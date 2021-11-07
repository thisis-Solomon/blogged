<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost v-if="showPost" :post="post" />
  </div>
  <div>
    <button @click="showPost = !showPost">hide posts</button>
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost.vue'
import { ref } from '@vue/reactivity'

export default {
  props: ['posts'],
  components: {
    SinglePost
  },
  setup (props) {
    const showPost = ref(true)

    return { showPost }
  }
}
</script>
