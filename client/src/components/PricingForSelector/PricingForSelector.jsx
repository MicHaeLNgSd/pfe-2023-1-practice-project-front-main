import React, { useState } from 'react';
import styles from './PricingForSelector.module.sass';
import CONSTANTS from '../../constants';

function PricingForSelector() {
  const [pricingFor, setPricingFor] = useState(CONSTANTS.PRICING_FOR[0]);
  const handleChange = ({ target: { value } }) => {
    setPricingFor(value);
  };
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingFor}>
        <label>
          <span>Pricing for</span>
          <div className={styles.priceSelector}>
            <select value={pricingFor} onChange={handleChange}>
              {CONSTANTS.PRICING_FOR.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </label>
      </div>
    </div>
  );
}

export default PricingForSelector;
