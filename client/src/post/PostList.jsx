import React, { useState, useEffect } from 'react'
import { Item, Segment } from 'semantic-ui-react'
import postService from '../api/postService'
import PostItem from './PostItem'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postService.getPosts().then((res) => setPosts(res))
  }, [])

  return (
    <Segment>
      <Item.Group divided>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</Item.Group>
    </Segment>
  )
}

export default PostList
