import React from 'react';
import './home-offers.scss';
import OfferSlider from './OfferSlider';
import OfferNavigationControls from './OfferNavigationControls';
import OfferDetails from '../HomeOffers/OfferDetails';
import OfferSliderMobile from './OfferSlider/OfferSliderMobile';
import { Link } from 'gatsby';
import Buttons from './Buttons';
import NavigationBottom from './NavigationBottom';



class HomeOffers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      isDesctop: true,
      currentOfferIndex: 0,
      isLargeScreen: true,
    }


    this.navigatePreviouse = this.navigatePreviouse.bind(this);
    this.navigateNext = this.navigateNext.bind(this);
    this.screenChange = this.screenChange.bind(this);
  }

  componentDidMount() {
    this.screenChange();
    window.addEventListener("resize", this.screenChange);
  }

  componentWillUnmount() {
    this.removeEventListener("resize", this.screenChange);
  }

  screenChange() {
    this.setState({
      isLargeScreen: window.innerWidth > 800,


    });
  };

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
    const { isLargeScreen, currentOfferIndex } = this.state


    if (isLargeScreen) {


      return (
        <div className='home-offers'>

          <div className='home-offer-desctop'>

            <Buttons />

            <div className='home-offer-desctop__row-details'>

              <div className='home-offer-desctop__image'>

                <OfferSlider offer={offers[this.state.currentOfferIndex]} offers={offers} />

              </div>

              <div className='home-offer-desctop__details'>

                <OfferNavigationControls
                  offers={offers}
                  navigatePreviouse={this.navigatePreviouse}
                  navigateNext={this.navigateNext} currentOfferIndex={this.state.currentOfferIndex} />


                <OfferDetails offer={offers[this.state.currentOfferIndex]} />

                <NavigationBottom />

              </div>

            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div className='home-offers'>
          <OfferSliderMobile
            offers={offers} navigatePreviouse={this.navigatePreviouse} navigateNext={this.navigateNext} currentOfferIndex={currentOfferIndex} />
        </div>
      );
    }
  }
}
export default HomeOffers;