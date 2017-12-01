import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Post = ({ title, body, date }) => (
  <div>
    <h1 className={style.h1}>{title}</h1>
    <h3>{date}</h3>
    <p>{body}</p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
