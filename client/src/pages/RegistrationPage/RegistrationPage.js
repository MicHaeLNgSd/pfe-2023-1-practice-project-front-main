import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import regFooterText from './regFooterText';
import styles from './RegistrationPage.module.sass';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
const {
  headerArticle,
  article,
  ColumnContainer,
  signUpPage,
  signUpContainer,
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
        <AuthHeader to="/login" linkText="Login" />
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
