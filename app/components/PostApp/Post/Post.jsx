import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import PropTypes from 'prop-types';

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

  render() {

    const { title, body, date } = this.props;

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
            title={title}
            subtitle={date}
          />
          <CardText>{body}</CardText>
          <CardActions>
            <Button
              label="Comments"
              onClick={this.handleToggleComments}
            />
            <Button
              label="edit post"
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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  deletePost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  handleCloseForm: PropTypes.func.isRequired,

}

export default Post;
