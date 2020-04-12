import React from 'react'
import { Item, Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const PostItem = ({ post }) => {
  return (
    <Item>
      <Item.Image size="small" src={post.photoUrl} circular />
      <Item.Content>
        <Item.Header as="a">{post.displayName}</Item.Header>
        <Item.Meta>
          @{post.userName} - <Icon name="calendar alternate outline" /> Posted on {post.postedOn}
        </Item.Meta>
        <Item.Description>
          <Item.Meta>{post.title}</Item.Meta>
          <p>{post.content}</p>
        </Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon="globe" content="Additional Languages" />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem
