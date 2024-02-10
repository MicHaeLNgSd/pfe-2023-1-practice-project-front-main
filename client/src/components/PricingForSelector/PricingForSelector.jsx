import React, { useState } from 'react';
import styles from './PricingForSelector.module.sass';
import CONSTANTS from '../../constants';

function PricingForSelector() {
  const [pricingFor, setPricingFor] = useState(CONSTANTS.PRICING_FOR[0]);
  const handleChange = ({ target: { value } }) => {
    setPricingFor(value);
  };
  return (
    <div>
      <div className={styles.pricingFor}>
        <label>
          <select value={pricingFor} onChange={handleChange}>
            {CONSTANTS.PRICING_FOR.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default PricingForSelector;
