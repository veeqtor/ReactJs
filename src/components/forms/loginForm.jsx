import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineErrors from '../messages/inlineError';

class LoginForm extends React.Component {
    state = {
      data: {
        email: '',
        password: '',
      },
      loading: false,
      errors: {},
    };

  onChange = (e) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value },
    });
  }

  onSubmit = () => {
    const { submit } = this.props;
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      submit(data);
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Email is invalid';
    if (!data.password) errors.password = 'Password is invalid';

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {/* Converting to boolean, errors object */}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineErrors text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineErrors text={errors.password} />}
        </Form.Field>
        <Button primary type="submit">Login</Button>
      </Form>
    );
  }
}
LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
