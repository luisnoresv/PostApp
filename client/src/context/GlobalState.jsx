import React, { useReducer, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import postService from '../api/postService'
import GlobalContext from './GlobalContext'
import { postReducer, FETCH_POSTS, LOADING_POSTS } from './postReducer'
import useDarkMode from '../hooks/useDarkMode'
import { DARK_MODE, LIGHT_MODE } from '../utils/constants'

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, { posts: [], loading: false })
  const [theme, setTheme] = useState(useDarkMode() ? DARK_MODE : LIGHT_MODE)

  const fetchPosts = useCallback(async () => {
    dispatch({ type: LOADING_POSTS, loading: true })
    try {
      const posts = await postService.getPosts()
      dispatch({ type: FETCH_POSTS, posts })

      dispatch({ type: LOADING_POSTS, loading: false })
    } catch (error) {
      dispatch({ type: LOADING_POSTS, loading: false })
      console.log(error)
    }
  }, [])

  const toogleTheme = () => (theme === DARK_MODE ? setTheme(LIGHT_MODE) : setTheme(DARK_MODE))

  return (
    <GlobalContext.Provider
      value={{ loading: state.loading, posts: state.posts, fetchPosts, theme, setTheme: toogleTheme }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalState.propTypes = {
  children: PropTypes.object.isRequired
}

export default GlobalState
