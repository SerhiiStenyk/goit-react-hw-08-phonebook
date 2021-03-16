import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './LoginForm.module.css';
import authOperations from '../../redux/auth/operations';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1 className={s.title}>Log In</h1>
        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              required
              onChange={this.handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              required
              onChange={this.handleChange}
            />
          </label>

          <button className={s.btn} type="submit">Login</button>
        </form>
      </div>
    );
  }
};
LoginForm.propTypes = {
  onLogin: PropTypes.func,
};
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginForm);
