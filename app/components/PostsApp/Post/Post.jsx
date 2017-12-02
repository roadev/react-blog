import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
} from 'react-toolbox/lib/card';
import { IconButton } from 'react-toolbox/lib/button';

const Post = ({ id, post, editPost, deletePost }) => (
  <div>
    <Card style={{width: '350px'}}>
      <CardTitle
        title={post.get('title')}
        subtitle={post.get('date')}
      />
      <CardText>{post.get('body')}</CardText>
      <CardActions>
        <IconButton
          icon="edit"
          onClick={() => editPost(post)}
        />
        <IconButton
          icon="delete"
          onClick={() => deletePost(id)}
        />
        {/* <Button label="Action 2" /> */}
      </CardActions>
    </Card>
    {/* <h1 className={style.h1}>{title}</h1>
    <h3>{date}</h3>
    <p>{body}</p> */}
  </div>
);

Post.propTypes = {
  post: ImmutablePropTypes.map.isRequired,
  // title: PropTypes.string.isRequired,
  // body: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
