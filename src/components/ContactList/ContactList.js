import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
import operations from '../../redux/contacts/operations';
import selectors from '../../redux/contacts/selectors';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contacts: selectors.findContact(state),
});
const mapDispatchToProps = dispatch => ({
  deleteContact: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
