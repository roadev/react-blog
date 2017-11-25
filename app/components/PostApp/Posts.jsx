import React, { Component } from 'react';
import { List, fromJS } from 'immutable';
import { merge, findIndex } from 'lodash/fp';
import { Button } from 'react-toolbox/lib/button';
import PropTypes from 'prop-types';
import ImmutableProptypes from 'react-immutable-proptypes';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

class Posts extends Component {

  static propTypes = {
    getPosts: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    postsData: ImmutableProptypes.map.isRequired,
  };

  state = {
    // posts: [],
    showForm: false,
    postToEdit: undefined,
  };

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    const { postsData } = nextProps;
    console.log(postsData.get('refresh'), postsData.get('postsLoading'));
    if (postsData.get('refresh') && !postsData.get('postsLoading')) {
      console.log('get Posts');
      this.getData();
    }
  }

  async getData() {
    const { getPosts } = this.props;
    await getPosts();
  }

  handleDeletePost = (id) => {
    const index = this.state.posts.findIndex(p => p.props.id === id);
    console.log(index);
    const posts = this.state.posts.delete(index);
    console.log(posts);
    this.setState({ posts });
  }

  handleEditForm = (post) => {
    console.log(post);
    this.setState({ showForm: true, postToEdit: fromJS(post) });
  };
  //
  // handleEdit = (post) => {
  //   console.log(post);
  //   const postIndex = findIndex(p => p.key === `${post.get('id')}`)(this.state.posts);
  //   console.log(postIndex);
  //   const postItem = (
  //     <Post
  //       key={post.get('id')}
  //       id={post.get('id')}
  //       title={post.get('title')}
  //       body={post.get('body')}
  //       // tags={comment.get('country')}
  //       date={post.get('date')}
  //       deletePost={this.handleDeletePost}
  //       handleEdit={this.handleEditForm}
  //       showForm={this.state.showForm}
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

    const { createPost } = this.props;

    createPost(post.toJS());
    this.handleCloseForm();

    // const postItem = (
      // <Post
      //   key={this.state.postsCount}
      //   id={this.state.postsCount}
      //   title={post.get('title')}
      //   body={post.get('body')}
      //   // tags={comment.get('country')}
      //   date={post.get('date')}
      //   deletePost={this.handleDeletePost}
      //   handleEdit={this.handleEditForm}
      //   showForm={this.state.showForm}
      //   createPost={this.handleCreatePost}
      //   handleCloseForm={this.handleCloseForm}
      // />
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

    const { postsData } = this.props;
    const posts = postsData ? postsData.get('posts') : undefined;

    const postsItems = posts ? posts.map(post => (
      <Post
        key={post.get('_id')}
        id={post.get('_id')}
        title={post.get('title')}
        body={post.get('body')}
        // tags={comment.get('country')}
        date={post.get('date')}
        deletePost={this.handleDeletePost}
        handleEdit={this.handleEditForm}
        showForm={this.state.showForm}
        createPost={this.handleCreatePost}
        handleCloseForm={this.handleCloseForm}
      />
    )) : null;

    console.log(this.state.showForm);
    return (
      <div>
        {postsItems}
        <PostForm
          showForm={this.state.showForm}
          createPost={this.handleCreatePost}
          editPost={this.handleEdit}
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
