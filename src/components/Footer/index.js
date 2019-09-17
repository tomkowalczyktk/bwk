import React from 'react';
import './footer.scss';
import { Link } from 'gatsby';
import { offers } from '../../source';
import classnames from 'classnames'

const Footer = ({ isLargeScreen }) => {
  return (
    <footer className={classnames('footer', { 'footer--large-screen': isLargeScreen })}>
      <div className='container'>
        <div className='footer__directions'>
          <div className='footer__directions__shortcuts'>
            <h4>Na skróty</h4>
            <Link to="/oferty">Biura</Link>
            <Link to='/#advantages'>Korzyści</Link>
            <Link to='/#testimonials'>Referencje</Link>
            <Link to="#">Kontakt</Link>
          </div>
          <div className='footer__directions__docs'>
            <h4>Dokumenty</h4>
            <a href='/documents/tenatcy-contract.txt' >Umowa najmu</a>
            <a href='/documents/statute.txt'>Regulamin</a>
            <a href='/documents/procol-of-reception.txt'>Protokół odbioru</a>
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
          <p className="with-span"><span >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32">
              <title>map-pin</title>
              <path d="M12 0c-6.617 0-12 5.394-12 12.022 0 9.927 11.201 19.459 11.678 19.86 0.093 0.079 0.208 0.118 0.322 0.118s0.226-0.038 0.318-0.114c0.477-0.394 11.682-9.762 11.682-19.864 0-6.628-5.383-12.022-12-12.022zM12.002 30.838c-1.841-1.645-11.002-10.259-11.002-18.816 0-6.078 4.935-11.022 11-11.022s11 4.944 11 11.022c0 8.702-9.152 17.193-10.998 18.816zM12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </span>Biuro w Kamienicy</p>
          <p>ul. Lipowa 4a, 20-420 Lublin</p>
          <p><a href="mailto:hubert@bwk.pl?Subject=Wynajem%20biura">hubert@bwk.pl</a></p>
          <p className="with-span"><span >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="42" height="32" viewBox="0 0 42 32">
              <title>toolbox</title>
              <path d="M41.5 17c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5h-39c-0.276 0-0.5-0.224-0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v13c0 0.827 0.673 1.5 1.5 1.5h39c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.276-0.224-0.5-0.5-0.5zM40.5 7h-39c-0.827 0-1.5 0.673-1.5 1.5v6c0 0.276 0.224 0.5 0.5 0.5h13.5v3.5c0 0.827 0.673 1.5 1.5 1.5h11c0.827 0 1.5-0.673 1.5-1.5v-3.5h13.5c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.827-0.673-1.5-1.5-1.5zM27 18.5c0 0.276-0.224 0.5-0.5 0.5h-11c-0.276 0-0.5-0.224-0.5-0.5v-3.5h12v3.5zM41 14h-40v-5.5c0-0.276 0.224-0.5 0.5-0.5h39c0.276 0 0.5 0.224 0.5 0.5v5.5zM15.5 0c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.827-0.673-1.5-1.5-1.5h-11z"></path>
            </svg>
          </span>NIP: 725-18-01-126</p>
          <p>KRS: 0000045146</p>

        </div>
      </div>
      <p className='footer__bottom'>Biuro w Kamienicy &copy; Wszelkie prawa zastrzeżone</p>
    </footer>
  )
}
export default Footer;
