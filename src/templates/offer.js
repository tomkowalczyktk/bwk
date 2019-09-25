import React from 'react';
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import Headline from '../components/Headline';
import HeaderOfferBtn from '../components/Header/HeaderOfferBtn';
import Offer from '../components/Offer';
import 'scss/bwk.scss';
import '../components/Headline/headline.scss';
import Footer from '../components/Footer';
import OfferFooter from '../components/Offer/OfferFooter';
import { Link } from 'gatsby';



export default ({ pageContext: { offer } }) => (


  <main>
    <link rel="stylesheet" href="https://use.typekit.net/fdm4ytj.css"></link>

    <Header isOfferPage={true} bgImg={offer.mainPhoto}>

      <HeaderHeadline
        text="Szczegóły oferty"
        isOfferPage={true}
      />
      <Link to={`/oferta-${offer.id}/#gallery-${offer.id}`}>
        <HeaderOfferBtn
          text='Zobacz zdjęcia'
        />
      </Link>

    </Header >
    <Headline
      title={`Lokal przy: ${offer.street}`}
      isOfferPage={true}
    />
    <div className='container'  >
      <Offer offer={offer} />
    </div>


    <OfferFooter />


    <div id="contact">
      <Footer />
    </div>

  </main >


);
