import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import styles from './LoginPage.module.sass';
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
      <div className={headerSignUpPage}>
        <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
        <Link to="/registration" className={linkLoginContainer}>
          Signup
        </Link>
      </div>
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
