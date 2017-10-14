import React from 'react';
import Link from 'react-toolbox/lib/link';
import Nav from '../Nav/Nav';
import Post from '../Post/Post';
// import style from '.'

const myString = 'hola';

const list = [
  { id: '1', title: 'title 1', body: 'body 1' },
  { id: '2', title: 'title 2', body: 'body 2' },
  { id: '3', title: 'title 3', body: 'body 3' },
  { id: '4', title: 'title 4', body: 'body 4' },
  { id: '5', title: 'title 5', body: 'body 5' },
];

const postListItems = list.map(p => (
  <Post
    key={p.id}
    title={p.title}
    body={p.body}
  />
));

const Home = () =>
  (
    <div>
      <Nav />
      <h3>
        This is the home page
      </h3>
      {postListItems}
    </div>
  );

export default Home;
