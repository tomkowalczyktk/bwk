import React from 'react';
import PropTypes from 'prop-types';
import {Placeholder} from 'components/UI';

const OfficeDetails = (props) => {
  const data = [{
    label : 'powierzchnia',
    value : '20',
    unit : 'm2'
  },{
    label : 'cena',
    value : '1300 (netto)',
    unit : 'zł'
  },{
    label : 'ulica',
    value : 'Sądowa',
  },{
    label : 'piętro',
    value : '1',
  },{
    label : 'szybki internet',
    value : 'tak'
  },{
    label : 'kącik socialny',
    value : 'tak'
  }]
  return (
    <React.Fragment>
      <ul class="list-group flex-grow-1 text-dark">
        {data.map(({label, value, unit}) => (
            <li class="list-group-item">
              <span className="text-muted">{label}:</span>{' '}
              {value}
              <em>{unit}</em>
            </li>
        ))}
        
      </ul>
      <button type="button" className="btn btn-block btn-primary">Wynajmij</button>
    </React.Fragment>
  )
}

// Specifies types for props:
OfficeDetails.propTypes = {
  
};

export default OfficeDetails;
