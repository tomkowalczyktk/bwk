import React from 'react';
import './footer.scss';
import { Link } from 'gatsby';


const Footer = ({ name, address, nip, krs }) => {
  return (
    <footer className='footer'>
      <div className='footer__directions'>
        <div className='footer__directions__shortcuts'>
          <Link href='#'>Biura</Link>
          <Link href='#'>Korzyści</Link>
          <Link href='#'>Referencje</Link>
          <Link href='#'>Kontakt</Link>
        </div>
        <div className='footer__directions__docs'></div>
        <div className='footer__directions__hot-offers'></div>
      </div>
      <div className='footer__contact'>
        <p>{name}</p>
        <p>{address}</p>
        <p>NIP: {nip}</p>
        <p>KRS: {krs}</p>

      </div>
    </footer>
  )
}
