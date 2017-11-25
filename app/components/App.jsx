import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
// import Nav from './Nav/Nav';
import About from './About/About';
import Home from './Home/Home';
import Post from './PostApp/container';
import PageNotFound from './PageNotFound/PageNotFound';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about/' exact component={About} />
        <Route path='/posts' exact component={Post} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
