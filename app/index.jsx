import React from 'react';
import { render } from 'react-dom';
import style from './style.css';

const App = ({ header }) => (
  <div>
    <h1>{header}</h1>
    <p>By Juan Roa from DevHack</p>
  </div>
);


render(<App header="Hello React!" />, document.getElementById('app'));
