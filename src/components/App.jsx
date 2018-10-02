import React from 'react';
import { element } from 'prop-types';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

const App = props => (
  <React.Fragment>
    <Header title="Forms" />

    <Content>{props.children}</Content>

    <Footer />
  </React.Fragment>
);

App.propTypes = {
  children: element
};

export default App;
