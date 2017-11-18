import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import Post from './PostApp/Posts';
import PageNotFound from './PageNotFound/PageNotFound';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route path="/about/" exact component={About} />
      <Route path="/posts" exact component={Post} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
