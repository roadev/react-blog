import React from 'react';
import Link from 'react-toolbox/lib/link';
import Nav from '../Nav/Nav';
import Posts from '../PostApp/Posts';
// import style from '.'

const Home = () =>
  (
    <div>
      <Nav />
      <h3>
        This is the home page
      </h3>
      <Posts
      />
    </div>
  );

export default Home;
