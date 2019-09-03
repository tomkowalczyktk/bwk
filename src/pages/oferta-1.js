import React from 'react';
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import HeaderOfferBtn from '../components/Header/HeaderOfferBtn';
import Offer from '../components/Offer';
import 'scss/bwk.scss';
import '../components/Headline/headline.scss';
import classnames from 'classnames';
import Footer from '../components/Footer';
import { offers } from '../source';

const OfferPage = () => {
  const offer = offers.find(item => item.id === 1);
  const id = 1;
  return (
    <main>
      <Header className="header header--offer-page">

        <HeaderHeadline className={classnames("header-headline header-headline--offer-page")}
          text={`Lokal przy ulicy ${offers[id].street}`}
        />
        <HeaderOfferBtn
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
