import React from 'react';
import PriceOptionsItem from './PriceOptionsItem/PriceOptionsItem';
import PriceOptionsText from './PriceOptionsText';
import styles from './PriceOptionsList.module.sass';

function PriceOptionsList() {
  const priceItems = PriceOptionsText.map((p) => (
    <PriceOptionsItem key={p.title} data={p} color="blue" />
  ));
  return (
    <>
      <div className={styles.PriceItemsContainer}>{priceItems}</div>
    </>
  );
}

export default PriceOptionsList;
