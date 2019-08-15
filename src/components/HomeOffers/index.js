import React from 'react';
import './home-offers.scss';

class HomeOffers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className='home-offers'>
        <div className='home-offer-desctop'>
          <div className='home-offer-desctop__row'>
            <div className='home-offer-desctop__button-top'>
              <a href="#">Wynajmij biuro</a>
            </div>
            <div className='home-offer-desctop__button-top'>           <a href="#">Wynajmij cały lokal</a>
            </div>
          </div>
          <div className='home-offer-desctop__row home-offer-desctop__row--details'>
            <div className='home-offer-desctop__image'>
              <img className='home-offer-desctop__image__small' alt='tumbnail image' src="#" />
              <img className='home-offer-desctop__image__big' alt='full screen image' src="#" />
              <img className='home-offer-desctop__image__big-esc' alt='full screen image esc' src="#" />
            </div>
            <div className='home-offer-desctop__details'>
              <div className='home-offer-desctop__details__navigation'>
                <div className='home-offer-desctop__details__navigation__controls'>
                  <div className='home-offer-desctop__details__navigation__controls__element'>Poprzednie biuro</div>
                  <div className='home-offer-desctop__details__navigation__controls__status'><p>1 z 6 biur</p>
                  </div>

                  <div className='home-offer-desctop__details__navigation__controls__element'>Następne biuro</div>

                </div>

              </div>
              <div className='home-offer-desctop__details__textbox'>
                <div className='home-offer-desctop__details__textbox_element'>
                  <p className='home-offer__details__textbox_element__left'>Powierzchnia:</p>
                  <p className='home-offer-desctop__details__textbox_element__right'> 20m2 do pobr z props</p>
                </div>
                <div className='home-offer-desctop__details__textbox_element'>
                  <p className='home-offer-desctop__details__textbox_element__left'>Cena:</p>
                  <p className='home-offer-desctop__details__textbox_element__right'>do pobr</p>
                </div>
                <div className='home-offer-desctop__details__textbox_element'>
                  <p className='home-offer-desctop__details__textbox_element__left'>Ulica:</p>
                  <p className='home-offer-desctop__details__textbox_element__right'> do pobr</p>
                </div>
                <div className='home-offer-desctop__details__textbox_element'>
                  <p className='home-offer-desctop__details__textbox_element__left'>Piętro:</p>
                  <p className='home-offer-desctop__details__textbox_element__right'>do pobr</p>
                </div>
                <div className='home-offer-desctop__details__textbox_element'>
                  <p className='home-offer-desctop__details__textbox_element__left'>Szybki internet:</p>
                  <p className='home-offer-desctop__details__textbox_element__right'>do pobr</p>
                </div>
                <div className='home-offer-desctop__details__textbox_element'>
                  <p className='home-offer-desctop__details__textbox_element__left'>Kącik socjalny:</p>
                  <p className='home-offer-desctop__details__textbox_element__right'>do pobr</p>
                </div>
              </div>
              <div className='home-offer__details__navigation-bottom'>
                <div className='home-offer__details__navigation-bottom__left'>
                  <p><img src='#' alt='arrow' />Zobacz więcej</p>
                </div>
                <div className='home-offer__details__navigation-bottom__right'>
                  <p>Wszystkie biura</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default HomeOffers;