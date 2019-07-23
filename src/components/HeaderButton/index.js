import React from 'react';
import './header-button.scss';
import { Link } from 'gatsby';
import keyImage from '../../images/key.png';


const HeaderButton = (props) => {
  return (
    < div className="header-button">
      <Link to="/"><img src={keyImage}></img>{props.text}</Link>
    </div>
  );
}
export default HeaderButton;