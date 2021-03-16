import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import s from './Filter.module.css';
import selectors from '../../redux/contacts/selectors';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
