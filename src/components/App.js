import React, { Component } from 'react';
import {Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import authOperations from '../redux/auth/operations';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../pages/HomePage';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  };
  render() {
    return (
      <Container>

        <AppBar />
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsPage}/>
          <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginPage}/>
          <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterPage}/>
        </Switch>

      </Container>
    );
  }
};
App.propTypes = {
  getCurrentUser: PropTypes.func,
};
const mapDispatchProps = {
  getCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchProps)(App);