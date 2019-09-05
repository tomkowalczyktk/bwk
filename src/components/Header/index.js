import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import logo_mobile from '../../images/logo-mobile.png';
import HeaderNavBar from './HeaderNavBar';
import Burger from './Burger';
import './header.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    isOfferPage: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      isLargeScreen: true,
      displayMenu: true,

    }
    this.toggle = this.toggle.bind(this);
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
      displayMenu: window.innerWidth > 800

    });
  };

  toggle() {
    const { isLargeScreen } = this.state;
    if (isLargeScreen) {
      return null;
    }

    this.setState(prevState => ({

      displayMenu: !prevState.displayMenu
    }
    ));
  }


  render() {
    const { displayMenu, isLargeScreen } = this.state;
    const { children, isOfferPage } = this.props;

    const headerContainerStyles = classnames("container container--header", { "container--header--offer-page": isOfferPage }, { "container--header--offer-page--mobile": isOfferPage && !isLargeScreen });
    return (
      <header className="header">
        <div className={headerContainerStyles}>

          <div className={classnames("header__top", { "header__top--menu-opened": displayMenu })}>


            <Link to="/"><img src={isLargeScreen ? logo : logo_mobile} className="header__top__logo" alt="Logo" /></Link>


            <div className="header__top__nav">

              {displayMenu && <HeaderNavBar onClick={this.toggle} />}

              < Burger onClick={this.toggle} />

            </div>


          </div>


          {children}


        </div>

      </header >
    );
  }
};



export default Header;
