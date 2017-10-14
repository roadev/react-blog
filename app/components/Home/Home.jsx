import React from 'react';
import Link from 'react-toolbox/lib/link';
import Nav from '../Nav/Nav';

const Home = () =>
  (
    <div>
      <Nav />
      <h3>
        This is the home page
      </h3>
      <Link href='/about' label='About' />
    </div>
  );

export default Home;
