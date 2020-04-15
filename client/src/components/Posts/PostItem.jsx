import React from 'react'
import { Item, Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const PostItem = ({ post, theme }) => {
  return (
    <Item className={theme}>
      <Item.Image size="small" src={post.photoUrl} circular />
      <Item.Content className={theme}>
        <Item.Header className={theme} as="a">
          {post.displayName}
        </Item.Header>
        <Item.Meta className={theme}>
          @{post.userName} - <Icon name="calendar alternate outline" /> Posted on {post.postedOn}
        </Item.Meta>
        <Item.Description className={theme}>
          <Item.Meta className={theme}>{post.title}</Item.Meta>
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
  post: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}

export default PostItem
