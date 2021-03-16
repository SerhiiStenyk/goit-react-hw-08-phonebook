/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;
const getLoading = state => state.auth.loading;
export default { getIsAuthenticated, getUserEmail, getLoading }