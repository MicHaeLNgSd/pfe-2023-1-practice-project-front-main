import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import styles from './LoginPage.module.sass';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
const { mainContainer, loginContainer, loginFormContainer } = styles;

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
