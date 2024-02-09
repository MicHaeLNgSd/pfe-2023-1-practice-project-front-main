import React from 'react';
import Logo from '../Logo';
import CONSTANTS from '../../constants';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './AuthHeader.module.sass';
const { headerSignUpPage, linkLoginContainer } = styles;

function AuthHeader({ to, linkText }) {
  return (
    <header className={headerSignUpPage}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
      <Link to={to} className={linkLoginContainer}>
        {linkText}
      </Link>
    </header>
  );
}

export default AuthHeader;
