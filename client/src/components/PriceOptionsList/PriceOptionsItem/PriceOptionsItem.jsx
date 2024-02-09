import React from 'react';
import styles from './PriceOptionsItem.module.sass';
import { FaCheck } from 'react-icons/fa';
import InfoTextItems from './InfoTextItems/InfoTextItems';

function PriceOptionsItem({ data }) {
  const infoItem = data.info.map((info) => <InfoTextItems info={info} />);
  return (
    <li className={styles.pricingItem}>
      <div className={styles.pricingBox}>
        <div>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.boxText}>{data.text}</p>
        </div>
        <span className={styles.price}>US${data.price}</span>
      </div>
      <ul>
        <li>{infoItem}</li>
        <li>
          <a href="/" className={styles.priceButton}>
            <FaCheck />
            <span>Start</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default PriceOptionsItem;
