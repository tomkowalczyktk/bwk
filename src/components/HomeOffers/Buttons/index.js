import React from 'react';
import './buttons.scss';

import ElementButton from './ElementButton';

export default class Buttons extends React.Component {

  render() {

    return (

      <div className='buttons-row'>
        <ElementButton
          label="Wynajmij biuro"
          link="#" />
        <ElementButton
          label="Wynajmij cały lokal"
          link="#" />

      </div>
    )
  }
}

