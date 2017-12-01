import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stateful extends Component {

  state = {
    count: 0,
  };

  handleOnAdd = (key, value) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleOnSubstract = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleOnAdd}>Add</button>
        <button onClick={this.handleOnSubstract}>Substract</button>
      </div>
    );
  }

}

const Text = ({ title, body }) =>
  (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <Stateful />
    </div>
  );

Text.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

Text.defaultProps = {
  body: 'No body',
};

export default Text;
