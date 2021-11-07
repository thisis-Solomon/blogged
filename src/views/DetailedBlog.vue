<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
import { getPost } from '../composable/getPost'
import { useRoute } from 'vue-router'

export default {
  props: ['id'],
  setup () {
    const route = useRoute()
    const id = route.params.id
    const { post, error, load } = getPost()

    load(id)

    return {
      post,
      error,
      id
    }
  }
}
</script>
