import React from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './CarsGrid.styles';

const CarsGrid = ({ children }) => {

  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
};


export default CarsGrid;