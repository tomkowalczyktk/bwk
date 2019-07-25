import React from 'react';
import Header from '../components/Header';
import 'scss/bwk.scss'
import HeaderHeadline from '../components/HeaderHeadline';
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
