import React, { Component } from 'react';
import { List } from 'immutable';
import IconButton from 'react-toolbox/lib/button';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

class Posts extends Component {

  state = {
    posts: List(),
    postsCount: 1,
    showForm: false,
  };

  handleDeletePost = (id) => {
    const index = this.state.posts.findIndex(p => p.props.id === id);
    console.log(index);
    const posts = this.state.posts.delete(index);
    console.log(posts);
    this.setState({ posts });
  }

  handleCreatePost = (post) => {
    const postItem = (
      <Post
        key={this.state.postsCount}
        id={this.state.postsCount}
        title={post.get('title')}
        body={post.get('body')}
        // tags={comment.get('country')}
        date={post.get('date')}
        deletePost={this.handleDeletePost}

        showForm={this.state.showForm}
        createPost={this.handleCreatePost}
        handleCloseForm={this.handleCloseForm}

        // { ...post }
      />
    );

    const posts = this.state.posts.concat(postItem);

    this.setState({
      posts,
      postsCount: this.state.postsCount + 1,
    });
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCloseForm = () => {
    this.setState({ showForm: false });
  };


  render() {

    return (
      <div>
        {this.state.posts}
        <PostForm
          showForm={this.state.showForm}
          createPost={this.handleCreatePost}
          handleCloseForm={this.handleCloseForm}
        />
        <IconButton
          icon="add"
          onClick={this.handleShowForm}
        />
      </div>
    );

  }

}

export default Posts;
