import React from 'react';
import PropTypes from 'prop-types';

function Comment({
  date,
  name,
  email,
  country,
  age,
}) {
  return (
    <div>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <p>{country}</p>
      </div>
      <div>
        <p>{age}</p>
      </div>

      <br />
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Comment;
