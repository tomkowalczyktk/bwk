import React from 'react';
import './advantage-section.scss';
import location from '../../images/icon-location.png';
import aircon from '../../images/icon-aircon.png';
import coffee from '../../images/icon-coffee.png';
import internet from '../../images/icon-internet.png';
import Advantage from './Advantage';

const AdvantageSection = () => {
  return (

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
  );
}



export default AdvantageSection;