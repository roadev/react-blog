import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const About = () =>
  (
    <div>
      <Nav />
      <h3>
        This is the about page
      </h3>
      <Link to='/'>Go to home</Link>
    </div>
  );

export default About;
