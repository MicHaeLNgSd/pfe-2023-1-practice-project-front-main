import React from 'react';
import CONSTANTS from '../../constants';
// import styles from './../Header/Header.module.sass';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './AuthUser.module.sass';
const { userInfo, userDropMenu, emailIcon } = styles;

function AuthUser({ data, logOut }) {
  return (
    <>
      <div className={userInfo}>
        <img
          src={
            data.avatar === 'anon.png'
              ? CONSTANTS.ANONYM_IMAGE_PATH
              : `${CONSTANTS.publicURL}${data.avatar}`
          }
          alt="user"
        />
        <span>{`Hi, ${data.displayName}`}</span>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
        <ul className={userDropMenu}>
          <li>
            <Link to="/dashboard">
              <span>View Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <span>My Account</span>
            </Link>
          </li>
          <li>
            <Link to="http:/www.google.com">
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="http:/www.google.com">
              <span>Affiliate Dashboard</span>
            </Link>
          </li>
          <li>
            <span onClick={logOut}>Logout</span>
          </li>
        </ul>
      </div>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
        className={emailIcon}
        alt="email"
      />
    </>
  );
}

export default AuthUser;
