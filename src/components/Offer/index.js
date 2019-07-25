import React from 'react';

const Offer = ({ id, content }) => {
  return (
    <div>
      <h2>id: {id}</h2>
      <div>{content}</div>
    </div>
  );
}


export default Offer;
