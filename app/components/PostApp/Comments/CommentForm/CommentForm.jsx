import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import { fromJS } from 'immutable';
import style from './style';

class CommentForm extends Component {

  static propTypes = {
    createComment: PropTypes.func.isRequired,
    handleCloseForm: PropTypes.func.isRequired,
  };

  static defaultComment = fromJS({
    date: '',
    name: '',
    email: '',
    country: '',
    age: '',
  });

  state = {
    commentState: CommentForm.defaultComment,
  };

  handleOnChange = (key, value) => {
    console.log(key, value);
    const commentState = this.state.commentState.set(key, value);
    this.setState({ commentState });
  };

  handleCreateComment = () => {
    const { createComment } = this.props;
    // const createComment = this.props.createComment;
    // const comment = Object.assign({}, this.state, { date: Date() });
    const comment = this.state.commentState.set('date', Date());
    console.log(comment);
    createComment(comment);
  };

  isValid = () => {
    let valid = true;
    console.log(this.state.commentState.valueSeq().toJS());
    this.state.commentState.valueSeq().forEach(i => { valid = i !== '' });
    console.log(valid);
    return valid;
  };

  render() {

    const { handleCloseForm } = this.props;

    console.log(this.state.commentState);

    const actions = [
      { label: "Cancel", onClick: handleCloseForm },
      {
        label: "Create comment",
        onClick: this.handleCreatePost,
        onClick: this.handleCreateComment,
        disabled: !this.isValid(),
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
                label="Name"
                type="text"
                required
                value={this.state.commentState.get('name')}
                onChange={this.handleOnChange.bind(this, 'name')}
              />
            </div>
            <div className={style.col2}>
              <Input
                label="Email"
                type="email"
                required
                value={this.state.commentState.get('email')}
                disabled={this.state.name === ''}
                onChange={this.handleOnChange.bind(this, 'email')}
              />
            </div>
          </div>

          <div className={style.row}>
            <div className={style.col2}>
              <Input
                label="Country"
                type="text"
                value={this.state.commentState.get('country')}
                disabled={this.state.name === ''}
                onChange={this.handleOnChange.bind(this, 'country')}
              />
            </div>
            <div className={style.col2}>
              <Input
                label="Age"
                type="number"
                value={this.state.commentState.get('age')}
                disabled={this.state.name === ''}
                onChange={this.handleOnChange.bind(this, 'age')}
              />
            </div>
          </div>

          {/* <Button
            icon="send"
            label="Comment"
            onClick={this.handleCreateComment}
            disabled={!this.isValid()}
          /> */}
        </Dialog>

      </div>

    );
  }
}

export default CommentForm;
