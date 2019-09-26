import React from 'react';
import './offer.scss';
import 'scss/bwk.scss';
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
        net: PropTypes.bool.isRequired,
        floor: PropTypes.string.isRequired,
        numOfOffices: PropTypes.number.isRequired,
        internet: PropTypes.bool.isRequired,
        social: PropTypes.bool.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        availableOn: PropTypes.string,
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

    const { id, area, street, city, internet, price, net, floor, numOfOffices, social, availableOn, photos } = this.props.offer;
    const { isLargeScreen, isFormDisplayed } = this.state;


    const { offer } = this.props;

    return (
      <div className="offer">

        <h2 hidden>id: {id}</h2>

        <div className="offer-details">

          <div className="offer-details__column">
            <p>Powierzchnia:<span>{`${area}m`}<sup>2</sup></span></p>
            <p>Cena:<span><AmountFormater>{price}</AmountFormater></span><span>{net ? "netto" : "brutto"}</span></p>
            <p>Ulica:<span>{street}</span></p>
            <p>Miasto:<span>{city}</span></p>
          </div>
          {!isLargeScreen && <OfferGalleryMobile data={photos} />}
          <div className="offer-details__column offer-details__column--right">

            <p>Piętro:<span>{floor}</span></p>
            <p>Szybki internet:<span>{internet ? "Tak" : "Nie"}</span></p>
            <p>Kącik socjalny:<span>{social ? "Tak" : "Nie"}</span></p>
            <p>Ilość biur w lokalu:<span>{numOfOffices}</span></p>
            {availableOn && <p>Dostępny od:<span><DateFormater format="DD.MM.YYYY">{availableOn}</DateFormater> rok</span></p>}
          </div>

        </div >

        {isLargeScreen && <GalleryDesktop photos={photos} id={`gallery-${id}`} />}


        <RentButton text="wynajmij lokal" onClick={this.handleFormDisplay} />

        {isFormDisplayed && <Form label="Zapytaj o ofertę" offer={offer} close={this.handleFormDisplay} />}

      </div >
    );
  }
}


export default Offer;

