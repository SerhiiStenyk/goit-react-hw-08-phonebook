import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './RegisterForm.module.css';
import authOperations from '../../redux/auth/operations';

class RegisterForm extends Component {
    state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1 className={s.title}>Registration</h1>
        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              required
              onChange={this.handleChange}
            />
          </label>

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

          <button className={s.btn} type="submit">Register</button>
        </form>
      </div>
    );
  }
};
RegisterForm.propTypes = {
  onRegister: PropTypes.func,
};
const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterForm);