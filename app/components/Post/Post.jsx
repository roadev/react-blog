import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import About from '../About/About';
import style from './style';

class Post extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }

  state = {
    className: '',
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
    const { body } = this.props;
    return (
      <div className={this.state.className}>
        <h1 className={style.h1Class}>
          {this.props.title}
        </h1>
        <div>
          {body || (<About />)}
        </div>
        <Button
          label="Dame click"
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}

export default Post;
