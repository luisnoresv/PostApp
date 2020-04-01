import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import PostList from './post/PostList'

const App = () => {
  return (
    <Segment>
      <Header textAlign="center" content="Posts" />
      <Container>
        <PostList />
      </Container>
    </Segment>
  )
}

export default App
