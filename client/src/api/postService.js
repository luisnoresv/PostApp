import request from './http'

const postService = {
  getPosts: () => request.get('/posts')
}

export default postService
