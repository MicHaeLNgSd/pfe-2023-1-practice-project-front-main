import React from 'react';
import CONSTANTS from '../../constants';
import styles from './NavBarList.module.sass';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function NavBarList(props) {
  const { navList } = props;
  const navItems = navList.map((l) => {
    const listItems = l.items.map((i) => (
      <li key={i.name}>
        <Link to={i.link}>{i.name}</Link>
      </li>
    ));
    return (
      <li key={l.title}>
        <span>{l.title}</span>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
        <ul className={styles.dropDownList}>{listItems}</ul>
      </li>
    );
  });
  return <ul className={styles.navList}>{navItems}</ul>;
}

export default NavBarList;
