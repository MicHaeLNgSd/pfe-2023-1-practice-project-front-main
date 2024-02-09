import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './InfoTextItems.module.sass';

function InfoTextItems({ info }) {
  const { text, list = [] } = info;

  const infoText = text.map((text) => <p className={styles.infoText}>{text}</p>);
  const infoListItems = list.map((item) => (
    <li className={styles.infoListItem}>
      <FaCheck />
      <span>{item}</span>
    </li>
  ));
  return (
    <li className={styles.infoItem}>
      {infoText}
      <ul>{infoListItems}</ul>
    </li>
  );
}

export default InfoTextItems;
