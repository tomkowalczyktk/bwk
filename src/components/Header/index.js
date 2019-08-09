import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import HeaderNavBar from './HeaderNavBar';
import Burger from './Burger';
import './header.scss';
import classnames from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: true,

    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(event) {

    this.setState(prevState => (
      {
        displayMenu: !prevState.displayMenu
      }
    ));
  }




  render() {
    const { displayMenu } = this.state;
    const { children } = this.props;

    return (
      <header className={classnames("header", { "header--menu-opened": displayMenu })}>
        <div className="container container--header">

          <div className="header__top">
            <Link to="/"><img src={logo} className="header__top__logo" alt="Logo" /></Link>
            <div className="header__top__nav">
              {displayMenu && <HeaderNavBar />}
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
