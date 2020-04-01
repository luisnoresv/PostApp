import { useState, useEffect } from 'react'
import postService from '../api/postService'

// always add the word use at the begining of the function name
const useFetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    postService
      .getPosts()
      .then((response) => {
        setLoading(false)
        setPosts(response)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [])

  return [loading, posts]
}

export default useFetchPosts
