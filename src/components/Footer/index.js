import React from 'react';
import './footer.scss';
import { Link } from 'gatsby';
import { offers } from '../../source';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__directions'>
          <div className='footer__directions__shortcuts'>
            <h4>Na skróty</h4>
            <Link to="/oferty">Biura</Link>
            <Link to='#advantages'>Korzyści</Link>
            <Link to='#testimonials'>Referencje</Link>
            <Link to="#">Kontakt</Link>
          </div>
          <div className='footer__directions__docs'>
            <h4>Dokumenty</h4>
            <Link to='../../components/documents/tenatcy-contract.txt'>Umowa najmu</Link>
            <Link to='../../components/documents/statute.txt'>Regulamin</Link>
            <Link to='../../components/documents/protocol-of-reception.txt'>Protokół odbioru</Link>
          </div>
          <div className='footer__directions__hot-offers'>
            <h4>Gorące oferty</h4>
            {offers.map(offer => (
              <Link key={offer.id} to={`oferta-${offer.id}`}>
                <p>{`${offer.area}m`}<sup>2</sup>,{` ul.${offer.street}`}</p>
              </Link>))}

          </div>
        </div>
        <div className='footer__contact'>
          <h4>Kontakt</h4>
          <p>Biuro w Kamienicy</p>
          <p>ul. Lipowa 4a, 20-420 Lublin</p>
          <p><a href="mailto:hubert@bwk.pl?Subject=Wynajem%20biura">hubert@bwk.pl</a></p>
          <p>NIP: 725-18-01-126</p>
          <p>KRS: 0000045146</p>

        </div>
      </div>
      <p className='footer__bottom'>Biuro w Kamienicy &copy; Wszelkie prawa zastrzeżone</p>
    </footer>
  )
}
export default Footer;
