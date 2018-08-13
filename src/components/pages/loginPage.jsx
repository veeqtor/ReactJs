/* eslint no-unused-expressions: 0 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Grid,
  Dimmer,
  Loader,
  Segment,
} from 'semantic-ui-react';
import LoginForm from '../forms/loginForm';

class LoginPage extends React.Component {
  state = {
    loading: false,
    redirect: false,
  };

  submit = (data, bool) => {
    this.setState({ loading: bool });
    setTimeout(() => {
      this.setState({ loading: false, redirect: true });
    }, 1000);
  };

  render() {
    const { loading, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="loginForm">
        <Dimmer active={loading}>
          <Loader indeterminate>Let me take you to your homepage</Loader>
        </Dimmer>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}
        </style>
        <Grid centered columns={1} style={{ height: '170%' }} verticalAlign="middle">
          <Grid.Column>
            <Segment className="formStyle">
              <h1 className="header1">Welcome</h1>
              <h2 className="header2">Log-in to your account</h2>
              <LoginForm submit={this.submit} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
