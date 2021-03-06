// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error404 from './components/Error/404';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/contact" component={Contact} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
