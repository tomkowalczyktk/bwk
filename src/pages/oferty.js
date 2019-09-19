import React from 'react';
import Header from '../components/Header';
import HeaderHeadline from '../components/HeaderHeadline';
import 'scss/bwk.scss'
import { offers } from '../source';
import Buttons from '../components/HomeOffers/Buttons';
import OfferSlider from '../components/HomeOffers/OfferSlider';
import OffersPageOfferMobile from '../components/Offers/OffersPageOfferMobile';
import OfferDetails from '../components/HomeOffers/OfferDetails';
import Footer from '../components/Footer';
import classnames from 'classnames';
import OfferBtn from '../components/Offers/OfferBtn';

class OffersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOffersPage: true,
      isLargeScreen: true
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

      isLargeScreen: window.innerWidth > 800


    });
  }

  render() {
    const { isLargeScreen } = this.state

    return (
      <main>
        <Header isOfferPage={true}>
          <HeaderHeadline
            text="Biura"
            isOfferPage={true}
          />
        </Header>
        <Buttons />

        {offers.map((offer, i) => (
          <div key={offer.id} className="container">


            <React.Fragment>
              {isLargeScreen && <div className={classnames('home-offers home-offers--offers-page', { "home-offers--offers-page--even": i % 2 !== 0 })}>
                <div className='home-offer-desctop'>



                  <div className='home-offer-desctop__row-details'>

                    <div className='home-offer-desctop__image'>

                      <OfferSlider item={offer} />

                    </div>

                    <div className='home-offer-desctop__details'>
                      <div className='home-offer-desctop__details__frame'>

                        <OfferDetails item={offer} />

                      </div>
                      <OfferBtn offer={offer} />
                    </div>

                  </div>
                </div>

              </div>}
              {!isLargeScreen && <div className='home-offers'>
                <OffersPageOfferMobile
                  item={offer} i={i} />
              </div>}
            </React.Fragment>

          </div>
        ))
        }
        <Footer isLargeScreen={isLargeScreen} />
      </main>
    );
  }
}

export default OffersPage;






