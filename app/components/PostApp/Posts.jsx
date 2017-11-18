import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { merge, findIndex } from 'lodash/fp';
import { Button } from 'react-toolbox/lib/button';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import { endpoints } from '../../constants';

class Posts extends Component {

  state = {
    posts: [],
    showForm: false,
    postToEdit: undefined,
  };

  componentDidMount() {
    console.log(endpoints);
    this.getData();
  }

  async getData() {
    const request = await fetch(endpoints.posts, {
      method: 'GET',
    });
    const response = await request.json();
    this.setState({ posts: fromJS(response) });
    console.log(response);
  }

  // handleDeletePost = (id) => {
  //   const index = this.state.posts.findIndex(p => p.props.id === id);
  //   console.log(index);
  //   const posts = this.state.posts.delete(index);
  //   console.log(posts);
  //   this.setState({ posts });
  // }
  //
  // handleEditForm = (post) => {
  //   console.log(post);
  //   this.setState({ showForm: true, postToEdit: post });
  // };
  //
  // handleEdit = (post) => {
  //   console.log(post);
  //   const postIndex = findIndex(p => p.key === `${post.get('id')}`)(this.state.posts);
  //   console.log(postIndex);
  //   const postItem = (
  //     <Post
  //       key={post.get('id')}
  //       id={post.get('id')}
  //       post={post}
  //       // tags={comment.get('country')}
  //       date={post.get('date')}
  //       deletePost={this.handleDeletePost}
  //       handleEdit={this.handleEditForm}
  //       createPost={this.handleCreatePost}
  //       handleCloseForm={this.handleCloseForm}
  //     />
  //   );
  //   const posts = this.state.posts.map((p, i) => {
  //     if (i === postIndex) {
  //       return merge(p, postItem);
  //     }
  //     return p;
  //   });
  //   // const posts = this.state.posts.set(postIndex, postItem);
  //   this.setState({ posts }, () => this.handleCloseForm());
  // };

  handleCreatePost = (post) => {
    console.log(post.toJS());
    const createPost = async () => {
      await fetch(endpoints.posts, {
        method: 'POST',
        body: JSON.stringify(post.toJS()),
        headers: { 'Content-Type': 'application/json' },
      });
    };

    createPost();
    // const postItem = (
    //   <Post
    //     key={this.state.postsCount}
    //     id={this.state.postsCount}
    //     post={post}
    //     // tags={comment.get('country')}
    //     date={post.get('date')}
    //     deletePost={this.handleDeletePost}
    //     handleEdit={this.handleEditForm}
    //     createPost={this.handleCreatePost}
    //     handleCloseForm={this.handleCloseForm}
    //   />
    // );
    //
    // const posts = this.state.posts.concat([postItem]);
    //
    // this.setState({
    //   posts,
    //   postsCount: this.state.postsCount + 1,
    // }, () => this.handleCloseForm());
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCloseForm = () => {
    this.setState({ showForm: false, postToEdit: undefined });
  };

  render() {
    const posts = this.state.posts.map(p =>
      (
        <Post
          key={p.get('_id')}
          id={p.get('_id')}
          post={p}
          // tags={comment.get('country')}
          date={p.get('date')}
          deletePost={this.handleDeletePost}
          handleEdit={this.handleEditForm}
          createPost={this.handleCreatePost}
          handleCloseForm={this.handleCloseForm}
        />
      ),
    );
    console.log(this.state.showForm);
    return (
      <div>
        {posts}
        <PostForm
          showForm={this.state.showForm}
          createPost={this.handleCreatePost}
          // editPost={this.handleEdit}
          handleCloseForm={this.handleCloseForm}
          post={this.state.postToEdit}
        />
        <Button
          icon="add"
          label="Create post"
          onClick={this.handleShowForm}
        />
      </div>
    );
  }
}

export default Posts;
