import React from 'react';
import './offer.scss';
import GalleryDesktop from './GalleryDesktop';
import RentButton from './RentButton';
import PropTypes from 'prop-types';
import OfferGalleryMobile from './OfferGalleryMobile';
import DateFormater from '../DateFormater';
import AmountFormater from '../AmountFormater';
import Form from '../Form';

class Offer extends React.Component {
  static propTypes = {
    offer: PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        area: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        floor: PropTypes.string.isRequired,
        internet: PropTypes.bool.isRequired,
        social: PropTypes.bool.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        availableOn: PropTypes.string.isRequired,
        photos: PropTypes.array.isRequired
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      isLargeScreen: true,
      isFormDisplayed: false,
    }

    this.screenChange = this.screenChange.bind(this);
    this.handleFormDisplay = this.handleFormDisplay.bind(this);
  }


  componentDidMount() {
    this.screenChange();
    window.addEventListener("resize", this.screenChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.screenChange);
  }

  screenChange() {
    this.setState({
      isLargeScreen: window.innerWidth > 800,
    });
  };
  handleFormDisplay(e) {
    const { isFormDisplayed } = this.state;
    this.setState({
      isFormDisplayed: !isFormDisplayed,
    });
  }

  render() {

    const { id, area, street, city, internet, price, floor, social, availableOn, photos } = this.props.offer;
    const { isLargeScreen, isFormDisplayed } = this.state;
    const avalaibleDate = new Date(availableOn);
    console.log(isFormDisplayed);
    return (
      <div className="offer">

        <h2 hidden>id: {id}</h2>

        <div className="offer-details">

          <div className="offer-details__column">
            <p>Powierzchnia:<span>{`${area}m`}<sup>2</sup></span></p>
            <p>Cena:<span><AmountFormater>{price}</AmountFormater>netto</span></p>
            <p>Ulica:<span>{street}</span></p>
            <p>Miasto:<span>{city}</span></p>
          </div>
          {!isLargeScreen && <OfferGalleryMobile data={photos} />}
          <div className="offer-details__column offer-details__column--right">

            <p>Piętro:<span>{floor}</span></p>
            <p>Szybki internet:<span>{internet ? "Tak" : "Nie"}</span></p>
            <p>Kącik socjalny:<span>{social ? "Tak" : "Nie"}</span></p>
            <p>Ilość biur w lokalu:<span>3</span></p>
            <p>Dostępny od:<span><DateFormater>{avalaibleDate}</DateFormater></span></p>
          </div>

        </div>
        {isLargeScreen && <GalleryDesktop photos={photos} />}


        <RentButton text="wynajmij lokal" onClick={this.handleFormDisplay} />

        {isFormDisplayed && <Form hasLabel="Zapytaj o ofertę" offerAddress={`ul. ${street} ${city}`} onClick={this.handleFormDisplay} />}

      </div >
    );
  }
}


export default Offer;
