import React from 'react';
import './home-offers.scss';
import OfferSlider from './OfferSlider';
import OfferNavigationControls from './OfferNavigationControls';
import OfferDetails from '../HomeOffers/OfferDetails';
import OfferSliderMobile from './OfferSlider/OfferSliderMobile';
import Buttons from './Buttons';
import NavigationBottom from './NavigationBottom';
import PropTypes from 'prop-types';
import withCarousell from '../hocComponents/withCarousell';


class HomeOffers extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
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
      isLargeScreen: window.innerWidth > 800


    });
  };

  render() {

    const { data, item, prev, next, index } = this.props;
    const { isLargeScreen } = this.state

    return (
      <React.Fragment>    // console.log("data in Home Offers", { data })

        {isLargeScreen && <div className='home-offers'>

          <div className='home-offer-desctop'>

            <Buttons />

            <div className='home-offer-desctop__row-details'>

              <div className='home-offer-desctop__image'>

                <OfferSlider item={item}
                />

              </div>

              <div className='home-offer-desctop__details'>
                <div className='home-offer-desctop__details__frame'>
                  <OfferNavigationControls
                    data={data}
                    prev={prev}
                    next={next}
                    index={index}
                  />

                  <OfferDetails item={item} />

                </div>
                <NavigationBottom item={item} />

              </div>

            </div>
          </div>

        </div>}
        {!isLargeScreen && <div className='home-offers'>
          <OfferSliderMobile
            data={data} />
        </div>}
      </React.Fragment>

    );
  }
}
export default withCarousell(HomeOffers);