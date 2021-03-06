import React, { useEffect, useContext } from 'react'
import { Item, Segment, Header, Container, Radio, Icon } from 'semantic-ui-react'
// import postService from '../../api/postService'
import PostItem from './PostItem'
import LoadingComponent from '../../layout/LoadingComponent'
// import useFetchPosts from '../../hooks/useFetchPosts'
import GlobalContext from '../../context/GlobalContext'
import { DARK_MODE } from '../../utils/constants'

const PostList = () => {
  // const [posts, setPosts] = useState([])
  // const [loading, setLoading] = useState(false)

  // With useCallback
  // const fetchPosts = useCallback(async () => {
  //   setLoading(false)
  //   try {
  //     const response = await postService.getPosts()
  //     setPosts(response)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     console.log(error)
  //   }
  // }, [])

  // useEffect(() => {
  //   fetchPosts()
  // }, [fetchPosts])

  // With UseEffect
  // useEffect(() => {
  //   setLoading(true)
  //   postService
  //     .getPosts()
  //     .then((response) => {
  //       setLoading(false)
  //       setPosts(response)
  //     })
  //     .catch((error) => {
  //       setLoading(false)
  //       console.log(error)
  //     })
  // }, [])

  // with custom Hook
  // const [loading, posts] = useFetchPosts()

  // if (loading) return <LoadingComponent content="Fetching data..." />
  // return (
  //   <Segment>
  //     <Header textAlign="center" content="Posts" />
  //     <Container>
  //       <Segment>
  //         <Item.Group divided>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</Item.Group>
  //       </Segment>
  //     </Container>
  //   </Segment>
  // )

  const { loading, posts, fetchPosts, theme, setTheme } = useContext(GlobalContext)

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  if (loading) return <LoadingComponent content="Fetching data..." />
  return (
    <>
      <Container textAlign="center">
        <Segment>
          <Radio toggle onChange={setTheme} label={`Change to ${theme === DARK_MODE ? 'Light Mode' : 'Dark Mode'}`} />{' '}
          <Icon name={theme === DARK_MODE ? 'sun' : 'moon'} color={theme === DARK_MODE ? 'yellow' : 'blue'} />
        </Segment>
      </Container>
      <Segment className={theme}>
        <Header textAlign="center" content="Posts" className={theme} />
        <Container className={theme}>
          <Segment className={theme}>
            <Item.Group divided>
              {posts && posts.map((post) => <PostItem key={post.id} post={post} theme={theme} />)}
            </Item.Group>
          </Segment>
        </Container>
      </Segment>
    </>
  )
}

export default PostList
