import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import styles from './LoginPage.module.sass';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
const {
  mainContainer,
  loginContainer,
  headerSignUpPage,
  linkLoginContainer,
  loginFormContainer,
} = styles;

const LoginPage = ({ history }) => (
  <div className={mainContainer}>
    <div className={loginContainer}>
      <AuthHeader to="/registration" linkText="Signup" />
      <div className={loginFormContainer}>
        <LoginForm history={history} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearErrorSignUpAndLogin()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
