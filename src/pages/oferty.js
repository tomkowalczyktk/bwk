import React from 'react';
import Header from '../components/Header';
import 'scss/bwk.scss'
import { offers } from '../source';
import { Link } from 'gatsby';
const OffersPage = () => (
  <main>
    <Header/>
    <h2>oferty</h2>
    {offers.map(offer => (
      <div key={offer.id} >
        <Link to={`/oferta-${offer.id}`}>
          {offer.id} {offer.content}
        </Link>
      </div>
    ))}
  </main>
);
export default OffersPage
