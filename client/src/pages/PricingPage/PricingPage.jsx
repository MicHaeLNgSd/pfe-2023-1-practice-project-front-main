import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PriceOptionsList from '../../components/PriceOptionsList/PriceOptionsList';
import PricingForSelector from '../../components/PricingForSelector/PricingForSelector';
import styles from './PricingPage.module.sass';

function PricingPage() {
  return (
    <>
      <Header />
      <PricingForSelector />
      <div className={styles.greySection}>
        <PriceOptionsList />
      </div>
      <Footer />
    </>
  );
}

export default PricingPage;
