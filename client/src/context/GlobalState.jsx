import React, { useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'
import postService from '../api/postService'
import GlobalContext from './globalContext'
import { postReducer, FETCH_POSTS, LOADING_POSTS } from './postReducer'

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, { posts: [], loading: false })

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

  return (
    <GlobalContext.Provider value={{ loading: state.loading, posts: state.posts, fetchPosts }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalState.propTypes = {
  children: PropTypes.object.isRequired
}

export default GlobalState
