import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { offer } }) => (
  <div>
    <h1>{offer.id}</h1>
    {JSON.stringify(offer)}
    <Link to="/oferty">wszystkie oferty</Link>
  </div>
);
