<template>
  <div class="home">Home</div>

  <div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>

  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { getPosts } from '../composable/getPosts.js'

export default {
  name: 'Home',
  components: { PostList },
  setup () {
    const { posts, error, load } = getPosts()

    load()
    return { posts, error }
  }
}
</script>
