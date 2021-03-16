import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm/LoginForm';
import Container from '../components/Container/Container';
import authSelectors from '../redux/auth/selectors';
import Loader from '../components/Loader/Loader';

const LoginPage = ({Loading}) => {
    return (
        <Container>
            {Loading ? <Loader/> : <LoginForm/> } 
        </Container>
    );
};
LoginPage.propTypes = {
    Loading: PropTypes.bool,
};
const mapStateToProps = state => ({
  Loading: authSelectors.getLoading(state)
});
export default connect(mapStateToProps) (LoginPage);