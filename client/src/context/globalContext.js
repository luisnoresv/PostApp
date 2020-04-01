import { createContext } from 'react'

const GlobalContext = createContext({
  loading: false,
  posts: [],
  fetchPosts: () => {}
})

export default GlobalContext
