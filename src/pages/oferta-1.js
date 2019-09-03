import React from 'react';
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import HeaderOfferButton from '../components/Header/HeaderOfferBtn';
import Offer from '../components/Offer';
import 'scss/bwk.scss';
import Footer from '../components/Footer';
import { offers } from '../source';

const OfferPage = () => {
  const offer = offers.find(item => item.id === 1);
  const id = 1;
  return (
    <main>
      <Header >

        <HeaderHeadline
          text={`Lokal przy ulicy ${offers[id].street}`}
        />
        <HeaderOfferButton
          text='Zobacz zdjęcia'
        />

      </Header>

      <div className='container'>
        <Offer {...offer} />
      </div>

      <div id="contact">
        <Footer />
      </div>

    </main>
  );
}
export default OfferPage
