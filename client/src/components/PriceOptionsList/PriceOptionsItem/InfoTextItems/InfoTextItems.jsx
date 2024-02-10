import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './InfoTextItems.module.sass';

function InfoTextItems({ info }) {
  const { text, list = [] } = info;

  const infoText = text.map((text, i) => (
    <p key={i} className={styles.infoText}>
      {text}
    </p>
  ));
  const infoListItems = list.map((item, i) => (
    <li key={i} className={styles.infoListItem}>
      <FaCheck className={styles.listIcon} />
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
