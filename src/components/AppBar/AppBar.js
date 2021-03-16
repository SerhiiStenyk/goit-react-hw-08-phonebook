import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/selectors';
import animation from '../animations.module.css';
import s from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
    return (
        <header className={s.header}>
            <CSSTransition
                in={true}
                appear={true}
                classNames={animation}
                timeout={1000}
                unmountOnExit
            >
                <NavLink
                    to="/"
                    exact
                    className={s.title}
                >
                    Phonebook
                    </NavLink>
            </CSSTransition>
            {isAuthenticated && (<NavLink
                to="/contacts"
                exact
                className={s.link}
                activeClassName={s.linkActive}
            >
                Contacts
            </NavLink>)}
            
            { isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

AppBar.propTypes = {
    isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
