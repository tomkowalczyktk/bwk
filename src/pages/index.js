import React from 'react';
import 'scss/bwk.scss'
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import HeaderButton from '../components/HeaderButton';
import keyImage from '../images/key.png';
import Headline from '../components/Headline';
import AdvantageSection from '../components/AdvantageSection';
import Testimonials from '../components/Testimonials';
import { testimonials, offers } from '../source';
import Footer from '../components/Footer';
import HomeOffers from '../components/HomeOffers';

const IndexPage = () => (
  <main>
    <link rel="stylesheet" href="https://use.typekit.net/fdm4ytj.css"></link>


    <Header >

      <HeaderHeadline
        text="Udogonienia biurowca w prestiżowej kamienicy w centrum miasta."
      />
      <HeaderButton
        image={keyImage}
        text='Wynajmij biuro'
      />

    </Header>


    <div className='container' id="advantages">
      <Headline title="Korzyści" />
      <AdvantageSection />
    </div>


    <div className='container' id="home-offers">
      <Headline title="Biura" />
      <HomeOffers offers={offers} />
    </div>


    <div className='container' id="testimonials">
      <Headline title='Referencje' />
      <Testimonials testimonials={testimonials} />
    </div>

    <div id="contact">
      <Footer />
    </div>
  </main >

);
export default IndexPage
