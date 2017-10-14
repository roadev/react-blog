import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
  (
    <div>
      <h3>
        This is the home page
      </h3>
      <Link to='/about'>
        Go to about
      </Link>
    </div>
  );

export default Home;
