import React from 'react';
import Header from '../components/Header';
import 'scss/bwk.scss'
// import { offers } from '../source';
// import AdvantageSection from '../components/AdvantagesSection';
import Advantage from '../components/Advantage';
import library from '../images/library.png';
import wifi from '../images/rss.png';
import ac from '../images/svg.png';
import social from '../images/mug.png';
import '../components/AdvantageSection/advantage-section.scss'
import Headline from '../components/Headline/Headline';
import Offices from '../components/Offices/Offices';


const IndexPage = () => (
  <main>
    <Header />
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
  </main>
);
export default IndexPage
