import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import HeaderNavBar from './HeaderNavBar';
import Burger from './Burger';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(event) {
    {
      HeaderNavBar
        .style = { display: "none" ? "block" : "none" && console.log("in header nav") }
    }
  }





  //   this.style = {{ display: block }
  // } ? && ${ HeaderNavBar }.style = {{ display: none }} ? ${ HeaderNavBar }.style = {{ display: block }} :
  // ${HeaderNavBar}.style={{display:none}}

  // return (
  //   console.log('toggle works')

  // );

  render() {
    const { children } = this.props;
    return (
      <header className="header">
        <div className="container container--header">
          <div className="header__top">
            <Link to="/"><img src={logo} className="header__top__logo" alt="Logo" /></Link>
            <div className="header__top__nav">
              <HeaderNavBar />
              <Burger onClick={this.toggle} />


            </div>

          </div>

          {children}

        </div>

      </header >
    );
  }
};



export default Header;
