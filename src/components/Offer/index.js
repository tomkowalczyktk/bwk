import React from 'react';
import './offer.scss';
import RentButton from './RentButton';
import PropTypes from 'prop-types';
class Offer extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    floor: PropTypes.string.isRequired,
    internet: PropTypes.bool.isRequired,
    social: PropTypes.bool.isRequired,
    street: PropTypes.string.isRequired,
    availableOn: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired

  }

  constructor(props) {
    super(props)
    this.state = {
      isLargeScreen: true,


    }

    this.screenChange = this.screenChange.bind(this);


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
  render() {

    const { id, area, street, internet, price, floor, social, availableOn, photos } = this.props;

    return (
      <div className="offer">
        <h2 hidden>id: {id}</h2>
        <div className="offer-details">
          <div className="offer-details__column">
            <p>Powierzchnia:<span>{`${area}m`}<sup>2</sup></span></p>
            <p>Ulica:<span>{street}</span></p>
            <p>Szybki internet:<span>{internet ? "Tak" : "Nie"}</span></p>
            <p>Ilość biur w lokalu:<span>3</span></p>
          </div>
          <div className="offer-details__column offer-details__column--right">
            <p>Cena:<span>{`${price} (netto) zł`}</span></p>
            <p>Piętro:<span>{floor}</span></p>
            <p>Kącik socjalny:<span>{social ? "Tak" : "Nie"}</span></p>
            <p>Dostępny od:<span>{availableOn}</span></p>
          </div>
        </div>
        <React.Fragment>

        </React.Fragment>

        <h2>Galeria zdjęć</h2>
        <div className='offer__gallery'>
          {photos.map((photo, i) => (<img src={photo.original} key={i} />))}
        </div>
        <RentButton anchor={"#"} text="wynajmij lokal" />

      </div >
    );
  }
}


export default Offer;
