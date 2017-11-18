import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { isNil } from 'lodash/fp';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';
import { fromJS } from 'immutable';
import style from './style.scss';

class PostForm extends Component {
  static propTypes = {
    showForm: PropTypes.bool.isRequired,
    handleCloseForm: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    post: ImmutablePropTypes.map,
  };

  static defaultProps = {
    post: undefined,
  };

  static defaultPost = () => fromJS({
    date: '',
    title: '',
    body: '',
    tags: [],
  });

  state = {
    creation: true,
    postState: PostForm.defaultPost(),
  };

  componentWillReceiveProps(nextProps) {
    const { post } = nextProps;
    console.log(post);
    this.setState({
      postState: post || PostForm.defaultPost(),
      creation: isNil(post),
    });
  }

  handleCreatePost = () => {
    const { createPost } = this.props;
    // const createComment = this.props.createComment;
    // const comment = Object.assign({}, this.state, { date: Date() });
    const post = this.state.postState.set('date', Date());
    console.log(post);
    this.setState({ postState: PostForm.defaultPost() }, () => createPost(post));
  };

  handleEditPost = () => {
    const { editPost } = this.props;
    const postState = this.state.postState;
    console.log(this.state.postState);
    this.setState(
      { postState: PostForm.defaultPost() },
      () => editPost(postState),
    );
  };

  handleOnChange = (key, value) => {
    const postState = this.state.postState.set(key, value);
    this.setState({ postState });
  };

  render() {
    const { handleCloseForm } = this.props;

    const actions = [
      { label: 'Cancel', onClick: handleCloseForm },
      {
        label: this.state.creation ?
          'Create post' : 'Update post',
        onClick: this.state.creation ?
          this.handleCreatePost : this.handleEditPost,
      },
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          active={this.props.showForm}
          onEscKeyDown={handleCloseForm}
          onOverlayClick={handleCloseForm}
        >
          <div className={style.row}>
            <div className={style.col2}>
              <Input
                className={style.input}
                label="Title"
                type="text"
                required
                value={this.state.postState.get('title')}
                onChange={this.handleOnChange.bind(this, 'title')}
              />
            </div>
            <div className={style.col2}>
              <Input
                className={style.input}
                label="Body"
                type="text"
                required
                value={this.state.postState.get('body')}
                onChange={this.handleOnChange.bind(this, 'body')}
              />
            </div>
          </div>
        </Dialog>

      </div>
    );
  }
}

export default PostForm;
