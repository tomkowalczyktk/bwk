import React from 'react';
// {/* <link rel="stylesheet" href="https://use.typekit.net/fdm4ytj.css"></link> */ }


import Header from '../components/Header';
import 'scss/bwk.scss'
// import { offers } from '../source';
// import AdvantageSection from '../components/AdvantagesSection';
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
// import Footer from '../components/Footer/Footer';
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



    <h2>home</h2>
    {/* <AdvantageSection /> */}
    <Headline title="Korzyści" />
    <div className="advantage-section">
      <Advantage
        icon={location}
        title="Prestiżowa lokalizacja"
        content="Biura i lokale położone w wiekowej, nowoczesnie odnowionej kamienicy"
      />
      <Advantage
        icon={aircon}
        title="Klimatyzacja"
        content="Każde pomieszczenie wyposażone jest w klimatyzację"
      />
      <Advantage
        icon={coffee}
        title="Kącik socjalny"
        content="Wspólne pomieszczenie wyposażone w ekspres do kawy, czajnik, mikrofalówkę"
      />
      <Advantage
        icon={internet}
        title="Szybki internet"
        content="Internet wi-fi dostępny we wszystkich biurach w cenie wynajmu"
      />
    </div>
    <Headline title="Biura" />
    <Offices />
    <Headline title="Referencje" />
    <Testimonial
      img='#'
      author='Zbyszek'
      content='Bardzo fajne biuro, profesjonalna obsługa, super lokalizacja'

    />
    <Testimonial
      img='#'
      author='Magdalena'
      content='Bardzo fajne biuro, profesjonalna obsługa, super lokalizacja'
    />
    {/* <Footer /> */}
  </main >
);
export default IndexPage
