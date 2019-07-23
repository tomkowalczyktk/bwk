import React from 'react';
import '../fonts/BentonSansRegular.ttf';
import '../fonts/BentonSansLight.ttf';
import '../fonts/BentonSansThin.ttf';
import Header from '../components/Header';
import 'scss/bwk.scss'
// import { offers } from '../source';
// import AdvantageSection from '../components/AdvantagesSection';
import HeaderHeadline from '../components/HeaderHeadline';
import Advantage from '../components/Advantage';
import library from '../images/library.png';
import wifi from '../images/rss.png';
import ac from '../images/svg.png';
import social from '../images/mug.png';
import '../components/AdvantageSection/advantage-section.scss'
import Headline from '../components/Headline/Headline';
import Offices from '../components/Offices/Offices';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';
import HeaderButton from '../components/HeaderButton';
import '../fonts/BentonSansRegular.ttf';

const IndexPage = () => (
  <main>
    <Header >

      <HeaderHeadline
        text="Udogonienia biurowca w prestiżowej kamienicy w centrum miasta."
      />
      <HeaderButton
        text='Wynajmij biuro'
      />


    </Header>



    <h2>home</h2>
    {/* <AdvantageSection /> */}
    <Headline title="Korzyści" />
    <div className="advantage-section">
      <Advantage
        icon={library}
        title="Prestiżowa lokalizacja"
        content="Biura i lokale położone w wiekowej, nowoczesnie odnowionej kamienicy"
      />
      <Advantage
        icon={ac}
        title="Klimatyzacja"
        content="Każde pomieszczenie wyposażone jest w klimatyzację"
      />
      <Advantage
        icon={social}
        title="Kącik socjalny"
        content="Wspólne pomieszczenie wyposażone w ekspres do kawy, czajnik, mikrofalówkę"
      />
      <Advantage
        icon={wifi}
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
    <Footer />
  </main >
);
export default IndexPage
