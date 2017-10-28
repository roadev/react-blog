import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import Comment from  './Comment/Comment';
import CommentForm from './Comment/CommentForm';
import About from '../About/About';
import style from './style';

class Post extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }

  state = {
    className: '',
    comments: [],
    commentsCount: 1,
  };

  handleCreateComment = (comment) => {
    const commentItem = (
      <Comment
        key={this.state.commentsCount}
        { ...comment }
      />
    );

    const comments = this.state.comments.concat(commentItem);

    this.setState({
      comments,
      commentsCount: this.state.commentsCount + 1,
    });
  };

  handleOnClick = () => {
    this.setState(
      {
        className: this.state.className === style.condition1 ?
          style.condition2 : style.condition1,
      },
    );
  };

  render () {

    console.log(this.state.commets);

    const { body } = this.props;
    return (
      <div className={this.state.className}>
        <h1 className={style.h1Class}>
          {this.props.title}
        </h1>
        <div>
          {body || (<About />)}
        </div>
        <CommentForm
          createComment={this.handleCreateComment}
        />
        {this.state.comments}
        {/* <Button
          label="Show"
          flat
          primary
          onClick={this.handleOnClick}
        /> */}
      </div>
    );
  }
}

export default Post;
