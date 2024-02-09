import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import {
  // getUserAction,
  clearUserStore,
  headerRequest,
} from '../../actions/actionCreator';
import NavBarList from '../NavBarList/NavBarList';
import AuthUser from '../AuthUser/AuthUser';

class Header extends React.Component {
  componentDidMount() {
    const { data, getUser } = this.props;
    if (!data) {
      getUser();
    }
  }

  logOut = () => {
    const { clearUserStore, history } = this.props;
    localStorage.clear();
    clearUserStore();
    history.replace('/login');
  };

  startContests = () => {
    const { history } = this.props;
    history.push('/startContest');
  };

  renderLoginButtons = () => {
    const { data } = this.props;
    if (data) {
      return <AuthUser data={data} logOut={this.logOut} />;
    }
    return (
      <>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>LOGIN</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: 'none' }}>
          <span className={styles.btn}>SIGN UP</span>
        </Link>
      </>
    );
  };

  render() {
    const { isFetching, data } = this.props;
    if (isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <div className={styles.fixedHeader}>
          <span className={styles.info}>
            Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.
          </span>
          <a href="http://www.google.com">Read Announcement</a>
        </div>
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <a href="tel:8773553585">(877)&nbsp;355-3585</a>
          </div>
          <div className={styles.userButtonsContainer}>{this.renderLoginButtons()}</div>
        </div>
        <div className={styles.navContainer}>
          <Link to="/">
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
              className={styles.logo}
              alt="blue_logo"
            />
          </Link>

          <div className={styles.leftNav}>
            <div className={styles.nav}>
              <NavBarList navList={CONSTANTS.NAVIGATION_LIST} />
            </div>
            {data && data.role !== CONSTANTS.CREATOR && (
              <div className={styles.startContestBtn} onClick={this.startContests}>
                START CONTEST
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
