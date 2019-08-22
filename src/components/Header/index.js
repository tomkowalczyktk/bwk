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
    const { displayMenu } = this.state;
    const { children } = this.props;

    return (
      <header className="header">
        <div className="container container--header">

          <div className={classnames("header__top", { "header__top--menu-opened": displayMenu })}>
            <Link to="/"><img src={logo} className="header__top__logo" alt="Logo" /></Link>
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
