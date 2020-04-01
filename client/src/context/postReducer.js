export const FETCH_POSTS = 'FETCH_POSTS'
export const LOADING_POSTS = 'LOADING_POSTS'

const fetchPosts = (posts, state) => {
  return { ...state, posts }
}

const loadingPosts = (loading, state) => {
  return { ...state, loading }
}

export const postReducer = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return fetchPosts(action.posts, state)
    case LOADING_POSTS:
      return loadingPosts(action.loading, state)
    default:
      return state
  }
}
