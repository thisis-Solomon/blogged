<template>
  <h3>{{ post.title }}</h3>
  <p>
    {{ snippet }}
    <router-link :to="{ name: 'Blog', params: { id: post.id } }" :id="post.id"
      >more</router-link
    >
  </p>
  <div v-for="tag in post.tags" :key="tag">
    <span>#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'

export default {
  props: ['post', 'id'],
  setup (props) {
    console.log(props.post.id)
    const snippet = computed(() => {
      return props.post.description.substring(0, 100) + ' ....'
    })
    return {
      snippet
    }
  }
}
</script>
