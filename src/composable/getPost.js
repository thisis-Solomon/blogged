import { ref } from 'vue'

export const getPost = () => {
  const post = ref(null)
  const error = ref(null)

  const load = async id => {
    try {
      const data = await fetch('http://localhost:3000/posts/' + id)

      if (!data.ok) {
        throw Error('This blog is not available')
      }

      post.value = await data.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { post, error, load }
}
