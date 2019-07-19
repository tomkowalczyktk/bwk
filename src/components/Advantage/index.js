import React from 'react';
import PropTypes from 'prop-types';
import './advantage.scss';


const Advantage = ({ icon, title, content }) => {
  return (
    <div>
      <img src={icon} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// Specifies types for props:
Advantage.propTypes = {

};

export default Advantage;