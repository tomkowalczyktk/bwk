import React from 'react';
import PropTypes from 'prop-types';
import './advantage.scss';


const Advantage = ({ icon, title, content }) => {
  return (
    <div className="advantage">
      <img className="advantage__icon" src={`${icon}`} alt={`${title} icon`} />
      <h3 className="advantage__title">{title}</h3>
      <p className="advantage__text">{content}</p>
    </div>
  );
}

// Specifies types for props:
Advantage.propTypes = {

};

export default Advantage;