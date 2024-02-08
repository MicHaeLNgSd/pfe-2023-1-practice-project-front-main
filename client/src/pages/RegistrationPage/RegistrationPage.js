import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import regFooterText from './regFooterText';
import styles from './RegistrationPage.module.sass';
const {
  headerArticle,
  article,
  ColumnContainer,
  signUpPage,
  signUpContainer,
  headerSignUpPage,
  linkLoginContainer,
  articlesMainContainer,
  footer,
} = styles;

const RegistrationPage = (props) => {
  props.clearError();

  const footerArticles = regFooterText.map((column) => {
    const columnArticles = column.map((art) => {
      return (
        <>
          <div className={headerArticle}>{art.title}</div>
          <div className={article}>{art.text}</div>
        </>
      );
    });
    return <div className={ColumnContainer}>{columnArticles}</div>;
  });

  return (
    <div className={signUpPage}>
      <div className={signUpContainer}>
        <div className={headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <Link to="/login" className={linkLoginContainer}>
            Login
          </Link>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      <div className={footer}>
        <div className={articlesMainContainer}>{footerArticles}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearErrorSignUpAndLogin()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
