import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

// import PostForm from '../PostForm/PostForm';
import Comments from '../Comments/Comments';

class Post extends Component {

  state = {
    showComments: false,
  };

  handleToggleComments = () => {
    this.setState({ showComments: !this.state.showComments });
  };

  handleDeletePost = () => {
    const { deletePost, id } = this.props;
    deletePost(id);
  };

  handleEditPost = () => {
    const { id, post, handleEdit } = this.props;
    handleEdit(post.set('id', id));
  };

  render() {
    const { post, date } = this.props;

    return (
      <div>
        {/* <PostForm
          showForm={this.props.showForm}
          createPost={this.props.createPost}
          handleCloseForm={this.props.handleCloseForm}
          post={this.state.postState}
        /> */}
        <Card style={{ width: 300 }}>

          <CardTitle
            title={post.get('title')}
            subtitle={date}
          />
          <CardText>{post.get('body')}</CardText>
          <CardActions>
            <Button
              label="Comments"
              onClick={this.handleToggleComments}
            />
            <Button
              label="Edit post"
              onClick={this.handleEditPost}
            />
            <Button
              label="Delete post"
              onClick={this.handleDeletePost}
            />
          </CardActions>
          {
            this.state.showComments ?
              <Comments />
            : null
          }
        </Card>
      </div>
    );
  }

}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  post: ImmutablePropTypes.map.isRequired,
  date: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Post;
