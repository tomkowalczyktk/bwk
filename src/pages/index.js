import React from 'react';
import 'scss/bwk.scss'
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import HeaderButton from '../components/HeaderButton';
import keyImage from '../images/key.png';
import Headline from '../components/Headline';
import AdvantageSection from '../components/AdvantageSection';
import testimonials from '../source';
console.log('testimonials', testimonials);
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



    <div className='container'>
      <a name="advantages"></a>
      <div className="container">
        <Headline title="Korzyści" />
        <AdvantageSection />
      </div>
    </div>

    <div className='container'>

    </div>


  </main>

);
export default IndexPage
