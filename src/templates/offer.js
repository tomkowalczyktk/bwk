import React from 'react';
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import Headline from '../components/Headline';
import HeaderOfferBtn from '../components/Header/HeaderOfferBtn';
import Offer from '../components/Offer';
import 'scss/bwk.scss';
import '../components/Headline/headline.scss';
import Footer from '../components/Footer';
import { offers } from '../source';
import OfferFooter from '../components/Offer/OfferFooter';



export default ({ pageContext: { offer } }) => (


  <main>
    <Header isOfferPage={true}>

      <HeaderHeadline
        text="Szczegóły oferty"
        isOfferPage={true}
      />
      <HeaderOfferBtn
        text='Zobacz zdjęcia'
      />

    </Header >
    <Headline
      title={`Lokal przy: ${offer.street}`}
      isOfferPage={true}
    />
    <div className='container'>
      <Offer {...offer} />
    </div>


    <OfferFooter />


    <div id="contact">
      <Footer />
    </div>

  </main>


);
