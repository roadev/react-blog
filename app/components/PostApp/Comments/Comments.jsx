import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { IconButton } from 'react-toolbox/lib/button';

import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';

class Comments extends Component {

  state = {
    comments: List(),
    commentsCount: 1,
    showForm: false,
  };

  handleCreateComment = (comment) => {
    const commentItem = (
      <Comment
        key={this.state.commentsCount}
        name={comment.get('name')}
        email={comment.get('email')}
        country={comment.get('country')}
        age={comment.get('age')}
        date={comment.get('date')}

        // { ...comment }
      />
    );

    const comments = this.state.comments.concat(commentItem);

    this.setState({
      comments,
      commentsCount: this.state.commentsCount + 1,
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
        {this.state.comments}
        <CommentForm
          handleCloseForm={this.handleCloseForm}
          createComment={this.handleCreateComment}
          showForm={this.state.showForm}
        />
        <IconButton
          icon="add"
          onClick={this.handleShowForm}
        />
      </div>
    );

  }

}

// function Comment({
//   date,
//   name,
//   email,
//   country,
//   age,
// }) {
//   return (
//     <div>
//       <div>
//         <p>{date}</p>
//       </div>
//       <div>
//         <p>{name}</p>
//       </div>
//       <div>
//         <p>{email}</p>
//       </div>
//       <div>
//         <p>{country}</p>
//       </div>
//       <div>
//         <p>{age}</p>
//       </div>
//
//       <br />
//     </div>
//   );
// }
//
// Comment.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   age: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
// };


export default Comments;
