import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { isNil } from 'lodash/fp';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';
import ImmutablePropTypes from 'react-immutable-proptypes';
// const { fromJS } = require('immutable');


class PostForm extends Component {

  static propTypes = {
    post: ImmutablePropTypes.map,
    createPost: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    closeForm: PropTypes.func.isRequired,
  };

  static postState = () => fromJS({
    title: '',
    body: '',
  });

  state = {
    postState: PostForm.postState(),
  };

  componentWillReceiveProps(nextProps) {
    const { post } = nextProps;
    if (!isNil(post)) {
      this.setState({ postState: post });
    }
    // this.setState({ postState: nextProps.post || PostForm.postState() }),
  }

  onTitleChange = (value) => {
    // this.setState({ title: title });
    const postState = this.state.postState.set('title', value);
    this.setState({ postState });
  }

  onBodyChange = (value) => {
    const postState = this.state.postState.set('body', value);
    this.setState({ postState });
  }

  handleCreatePost = () => {
    const { createPost } = this.props;
    // const post = Object.assign({}, this.state, { date: Date() });
    const post = this.state.postState.set('date', Date());
    // console.log(post);
    this.setState({ postState: PostForm.postState() }, () => createPost(post));
    // createPost(post);
  };

  handleEditPost = () => {
    const { post, editPost } = this.props;
    editPost(post);
  };

  render() {

    const { active, closeForm, post } = this.props;

    const actions = [
      { label: "Cancel", onClick: closeForm },
      {
        label: isNil(post) ? "Create" : "Update",
        onClick: isNil(post) ? this.handleCreatePost : this.handleEditPost,
      }
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          active={active}
          onEscKeyDown={closeForm}
          onOverlayClick={closeForm}
          title='My awesome dialog'
        >
          <Input
            label="Title"
            onChange={this.onTitleChange}
            value={this.state.postState.get('title')}
          />
          <Input
            label="Body"
            onChange={this.onBodyChange}
            value={this.state.postState.get('body')}
          />
        </Dialog>

      </div>
    );
  }
}

export default PostForm;
