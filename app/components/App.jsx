import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from './Nav/Nav';
import About from './About/About';
import Home from './Home/Home';
import PageNotFound from './PageNotFound/PageNotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about/' exact component={About} />
      <Route component={PageNotFound}/>
      {/* <Route path='/posts' /> */}
    </Switch>
  </Router>
);

export default App;
