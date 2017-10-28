import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

class CommentForm extends Component {

  static propTypes = {
    createComment: PropTypes.func.isRequired,
  };

  state = {
    date: '',
    name: '',
    email: '',
    country: '',
    age: '',
  };

  handleOnChange = (key, value) => {
    console.log(key, value);
    this.setState({ [key]: value });
  };

  handleCreateComment = () => {
    const { createComment } = this.props;
    // const createComment = this.props.createComment;
    const comment = Object.assign({}, this.state, { date: Date() });
    console.log(comment);
    createComment(comment);
  };

  isValid = () => {
    let valid = true;
    Object.values(this.state).forEach(i => { valid = i !== '' });
    return valid;
  };

  render() {

    console.log(this.state.name);

    return (

      <div>
        <div>
          <Input
            label="Name"
            type="text"
            required
            value={this.state.name}
            onChange={this.handleOnChange.bind(this, 'name')}
          />
        </div>
        <div>
          <Input
            label="Email"
            type="email"
            required
            value={this.state.email}
            disabled={this.state.name === ''}
            onChange={this.handleOnChange.bind(this, 'email')}
          />
        </div>
        <div>
          <Input
            label="Country"
            type="text"
            value={this.state.country}
            disabled={this.state.name === ''}
            onChange={this.handleOnChange.bind(this, 'country')}
          />
        </div>
        <div>
          <Input
            label="Age"
            type="number"
            value={this.state.age}
            disabled={this.state.name === ''}
            onChange={this.handleOnChange.bind(this, 'age')}
          />
        </div>
        <Button
          icon="send"
          label="Comment"
          onClick={this.handleCreateComment}
          disabled={!this.isValid()}
        />
      </div>

    );
  }
}

export default CommentForm;
