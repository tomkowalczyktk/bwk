import React from 'react';
import Header from '../components/Header';
import 'scss/bwk.scss'
import HeaderHeadline from '../components/HeaderHeadline';
import Advantage from '../components/Advantage';
import location from '../images/icon-location.png';
import internet from '../images/icon-internet.png';
import aircon from '../images/icon-aircon.png';
import coffee from '../images/icon-coffee.png';
import '../components/AdvantageSection/advantage-section.scss'
import Headline from '../components/Headline/Headline';
import Offices from '../components/Offices/Offices';
import Testimonial from '../components/Testimonial/Testimonial';
import HeaderButton from '../components/HeaderButton';
import keyImage from '../images/key.png';


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

  </main >
);
export default IndexPage
