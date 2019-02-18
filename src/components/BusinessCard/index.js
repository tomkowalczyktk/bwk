import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Wrapper, Inner, NameWrapper, Name, Position, Telephone, Company, CompanySlogan, Address } from './BusinessCard.style';

const BusinessCard = ({name, position, telephone, company, companySlogan, address}) => {
    return (
      <Backdrop>
        <Wrapper>
          <Inner>
          <Telephone>{telephone}</Telephone>
          <NameWrapper>
            <Name>{name}</Name>
            <Position>{position}</Position>
          </NameWrapper>
          <Company>
            {company}
            <CompanySlogan>{companySlogan}</CompanySlogan>
          </Company>
          <Address>{address}</Address>
          </Inner>
        </Wrapper>
      </Backdrop>
    );
}


export default BusinessCard;
