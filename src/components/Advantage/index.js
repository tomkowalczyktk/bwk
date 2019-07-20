import React from 'react';
import PropTypes from 'prop-types';
import './advantage.scss';


const Advantage = (props) => {
  return (
    <div className="advantage">
      <img className="advantage__icon" src={`${props.icon}`} alt={`${props.title} icon`} />
      <h3 className="advantage__title">{props.title}</h3>
      <p className="advantage__text">{props.content}</p>
    </div>
  );
}

// Specifies types for props:
Advantage.propTypes = {

};

export default Advantage;