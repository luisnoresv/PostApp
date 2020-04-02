import React from 'react'
import { ToastContainer } from 'react-toastify'
import PostList from './components/Posts/PostList'
import GlobalState from './context/GlobalState'

const App = () => {
  // return <PostList />

  // With GlobalState, usecontext and useReducer
  return (
    <>
      <ToastContainer position="bottom-right" />
      <GlobalState>
        <PostList />
      </GlobalState>
    </>
  )
}

export default App
