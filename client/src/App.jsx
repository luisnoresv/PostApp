import React from 'react'
import PostList from './components/Posts/PostList'
import GlobalState from './context/GlobalState'

const App = () => {
  // return <PostList />

  // With GlobalState, usecontext and useReducer
  return (
    <GlobalState>
      <PostList />
    </GlobalState>
  )
}

export default App
