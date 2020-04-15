import { createContext } from 'react'

const GlobalContext = createContext({
  loading: false,
  posts: [],
  fetchPosts: () => {},
  theme: '',
  setTheme: () => {}
})

export default GlobalContext
