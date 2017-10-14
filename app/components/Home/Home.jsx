import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Home = () =>
  (
    <div>
      <Nav />
      <h3>
        This is the home page
      </h3>
      <Link to='/about'>
        Go to about
      </Link>
    </div>
  );

export default Home;
