import React from 'react';
import Header from '../components/Header';
import 'scss/bwk.scss'
import { advantages } from '../source';
import { Link } from 'gatsby';

const AdvantagePage = () => (
  <main>
    <Header />
    <h2>Korzyści</h2>
    {advantages.map(advantage => (
      <div key={advantage.id} >
        <Link to={"/advantage"}>
          {advantage.icon} {advantage.title} {advantage.content}
        </Link>
      </div>
    ))}
  </main>
);
// export default AdvantagePage