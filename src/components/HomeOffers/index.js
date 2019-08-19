import React from 'react';
import './home-offers.scss';
import OfferSlider from './OfferSlider';
import OfferNavigationControls from './OfferSlider/OfferNavigationControls';
import OfferDetails from './OfferDetail';


class HomeOffers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      isDesctop: true,
      currentOfferIndex: 0

    }


    this.navigatePreviouse = this.navigatePreviouse.bind(this);
    this.navigateNext = this.navigateNext.bind(this);

  }

  navigatePreviouse() {

    const { offers } = this.props;

    this.setState(
      (prevState) => {
        if (prevState.currentOfferIndex > 0) {
          return {
            currentOfferIndex: prevState.currentOfferIndex - 1
          }
        } else {
          return {
            currentOfferIndex: offers.length - 1
          }
        }
      }
    )
  }

  navigateNext() {

    const { offers } = this.props;

    this.setState(
      (prevState) => {
        if (prevState.currentOfferIndex < offers.length - 1) {
          return {
            currentOfferIndex: prevState.currentOfferIndex + 1
          }
        } else {
          return {
            currentOfferIndex: 0
          }
        }
      }
    )
  }
  render() {

    const { offers } = this.props;

    return (
      <div className='home-offers'>
        <div className='home-offer-desctop'>
          <div className='home-offer-desctop__row'>
            <div className='home-offer-desctop__button-top'>
              <a href="#">Wynajmij biuro</a>
            </div>
            <div className='home-offer-desctop__button-top'><a href="#">Wynajmij cały lokal</a>
            </div>
          </div>
          <div className='home-offer-desctop__row home-offer-desctop__row--details'>

            <div className='home-offer-desctop__image'>

              <OfferSlider offer={offers[this.state.currentOfferIndex]} />


            </div>

            <div className='home-offer-desctop__details'>
              <div className='home-offer-desctop__details__navigation'>
                <OfferNavigationControls offers={offers} navigatePreviouse={this.navigatePreviouse} navigateNext={this.navigateNext} currentOfferIndex={this.state.currentOfferIndex} />
              </div>


              <OfferDetails offer={offers[this.state.currentOfferIndex]} />



              <div className='home-offer-desctop__details__navigation-bottom'>
                <div className='home-offer-desctop__details__navigation-bottom__element home-offer-desctop__details__navigation-bottom__element--left'>
                  <p><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <title>forward</title>
                    <path d="M16.711 8.29l-6-5.996c-0.391-0.391-1.026-0.391-1.417 0s-0.391 1.025 0 1.417l4.293 4.29h-11.59c-0.553 0-1.001 0.448-1.001 1s0.448 1 1.001 1h11.59l-4.292 4.29c-0.391 0.391-0.391 1.025 0.001 1.417s1.026 0.391 1.417 0l6-5.997c0.196-0.196 0.294-0.453 0.294-0.71s-0.097-0.514-0.294-0.71z"></path>
                  </svg>Zobacz więcej</p>
                </div>
                <div className='home-offer-desctop__details__navigation-bottom__element home-offer-desctop__details__navigation-bottom__element--right'>
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