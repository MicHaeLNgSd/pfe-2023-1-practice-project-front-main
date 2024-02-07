import React from 'react';

import CONSTANTS from '../../constants';
import styles from './NavBarList.module.sass';
// import styles from '../Header/Header.module.sass';

function NavBarList(props) {
  const { navList } = props;
  const navItems = navList.map((l) => {
    const listItems = l.items.map((i) => (
      <li>
        <a href={i.link}>{i.name}</a>
      </li>
    ));
    return (
      <li>
        <span>{l.title}</span>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
        <ul>{listItems}</ul>
      </li>
    );
  });
  return <ul>{navItems}</ul>;
}

export default NavBarList;
