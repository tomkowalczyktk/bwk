import React from 'react';
import './footer.scss';
import NavBar from '../NavBar/NavBar';

const Footer = () => {
  return (
    <div className='footer' >
      <div className='footer__body'>
        <div className='footer__body__col1'>
          <NavBar />
        </div>
        <div className='footer__body__col2'></div>
        <div className='footer__body__col3'></div>
        <div className='footer__body__col4'></div>
      </div>
      <div className='footer__signature'>
        Biuro w Kamienicy &copy; Wszelkie prawa zastrzeżone
      </div>
    </div >

  )
}
export default Footer;