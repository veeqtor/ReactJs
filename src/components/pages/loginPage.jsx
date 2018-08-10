/* eslint no-unused-expressions: 0 */

import React from 'react';
import LoginForm from '../forms/loginForm';

class LoginPage extends React.Component {
  submit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>
        LoginPage
        </h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
