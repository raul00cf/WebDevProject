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

/*
HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};
*/

export default CarsGrid;