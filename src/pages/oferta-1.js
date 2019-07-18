import React from 'react';
import Header from '../components/Header';
import Offer from '../components/Offer';
import 'scss/bwk.scss'

import { offers } from '../source';
const OfferPage = () => {
  const offer = offers.find(item => item.id == 1);
  return (
    <main>
      <Header/>
      <Offer {...offer}/>
    </main>
  );
}
export default OfferPage
