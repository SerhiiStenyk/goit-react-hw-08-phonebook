import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './UserMenu.module.css';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import { BsBoxArrowRight } from "react-icons/bs";

const UserMenu = ({ email, onLogout }) => (
  <div className={s.container}>
    <span className={s.name}>{email}</span>
    <button className={s.btn} type="button" onClick={onLogout}>
      <BsBoxArrowRight className={s.icon}/>
    </button>
  </div>
);
UserMenu.propTypes = {
  email: PropTypes.string,
  onLogout: PropTypes.func,
};
const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps )(UserMenu);
