import React, { Component } from 'react';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

class Posts extends Component {

  state = {
    posts: [],
    postsCount: 1,
  };

  createPost = (post) => {
    console.log(post);
    const postItem = (
      <Post
        key={this.state.postsCount}
        // title={pos}
        // body="body"
        { ...post }
      />
    );
    const posts = this.state.posts.concat(postItem);
    this.setState({
      posts,
      postsCount: this.state.postsCount + 1,
    });
  };

  render() {
    return (
      <div>
        {this.state.posts}
        <PostForm
          createPost={this.createPost}
        />
      </div>
    );
  }

}

export default Posts;
