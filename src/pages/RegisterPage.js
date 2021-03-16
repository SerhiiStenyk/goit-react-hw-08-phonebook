import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import authSelectors from '../redux/auth/selectors';
import Loader from '../components/Loader/Loader';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Container from '../components/Container/Container';


const RegisterPage = ({Loading}) => {
    return (
        <Container>
             {Loading ? <Loader/> : <RegisterForm/> }
        </Container>
    );
};
RegisterPage.propTypes = {
    Loading: PropTypes.bool,
};
const mapStateToProps = state => ({
  Loading: authSelectors.getLoading(state)
});
export default connect (mapStateToProps) (RegisterPage);