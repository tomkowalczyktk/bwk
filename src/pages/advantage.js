import React from 'react';
import Header from '../components/Header';
import Advantage from '../components/Advantage';
import 'scss/bwk.scss'

import { advantages } from '../source';
const AdvantagePage = () => {
  const advantage = advantages.find(item => item.id == 1);
  return (
    <main>
      <Header />
      <Advantage {...advantage} />
    </main>
  );
}
export default AdvantagePage