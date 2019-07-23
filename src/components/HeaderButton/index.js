import React from 'react';
import './header-button.scss';
import { Link } from 'gatsby';


const HeaderButton = (props) => {
  return (
    < div className="header-button">
      <Link to="/"><img src={props.image}></img>{props.text}</Link>
    </div>
  );
}
export default HeaderButton;