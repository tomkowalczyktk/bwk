import React from 'react';
import './offer.scss';
import RentButton from './RentButton';

const Offer = ({ id, area, street, internet, price, floor, social, availableOn, photos }) => {
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
      <h2>Galeria zdjęć</h2>
      <div className='offer__gallery'>
        {photos.map(photo => (<img src={photo.original} />))}
      </div>
      <RentButton anchor={"#"} text="wynajmij lokal" />

    </div >
  );
}


export default Offer;
