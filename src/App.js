import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/homepage';
import LoginPage from './components/pages/loginPage';
import './App.css';

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={Homepage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default hot(module)(App);
// export default App;
