import React from 'react';
import 'scss/bwk.scss'
// import Advantage from '../components/Advantage';
import Headline from '../components/Headline';
import location from '../images/icon-location.png';
import aircon from '../images/icon-aircon.png';
import coffee from '../images/icon-coffee.png';
import internet from '../images/icon-internet.png';
import AdvantageSection from '../components/AdvantageSection';

const IndexPage = () => (
  <main>
    <link rel="stylesheet" href="https://use.typekit.net/fdm4ytj.css"></link>
    <div className='container'>
      <a name="advantages"></a>
      <div className="container">
        <Headline title="Korzyści" />
        <AdvantageSection />
      </div>
    </div>

  </main>
);
export default IndexPage
