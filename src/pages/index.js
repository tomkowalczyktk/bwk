import React from 'react';
import Header from '../components/Header';
import 'scss/bwk.scss'
import { offers } from '../source';
import AdvantageSection from '../components/AdvantagesSection';

const IndexPage = () => (
  <main>
    <Header />
    <h2>home</h2>
    <AdvantageSection />
  </main>
);
export default IndexPage
