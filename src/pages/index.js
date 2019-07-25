import React from 'react';
import 'scss/bwk.scss'
// import Advantage from '../components/Advantage';
import Headline from '../components/Headline';
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
