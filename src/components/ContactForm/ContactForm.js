import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import s from './ContactForm.module.css';
import Notification from '../Notification/Notification';
import errorStyles from '../Notification/Notification.module.css';
import operations from '../../redux/contacts/operations';
import selectors  from '../../redux/contacts/selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    error: false,
  };
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const duplicate = this.props.contacts.some(
      item => item.name === this.state.name,
    );
    if (duplicate) return this.toggleError();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  toggleError = () => {
    this.setState({ error: true });
    setTimeout(() => { this.setState({ error:false }) }, 2000);
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number, error } = this.state;
    return (
      <>
        <CSSTransition
          in={error}
          classNames={errorStyles}
          timeout={250}
          unmountOnExit
        >
          <Notification/>
        </CSSTransition>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label className={s.label}>
            {' '}
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            {' '}
            Phone
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={s.btn} type="submit" disabled={!name}>
            {' '}
            Add contact
          </button>
        </form>
      </>
    );
  }
};
ContactForm.propTypes = {
  contacts: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
})
const mapDispatchToProps = dispatch => ({
  onSubmit: (contact) => dispatch(operations.addContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps )(ContactForm);
