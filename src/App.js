import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Homepage from './components/pages/homepage';
import LoginPage from './components/pages/loginPage';


const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/login" exact component={LoginPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default hot(module)(App);
// export default App;
