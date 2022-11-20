import React from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Sort, SortText } from './HomeSort.styles';

const HomeSort = ({ sort, setSort, numFiltered }) => {

  const options = [
    {value: 'popular', text: 'Sort by: Most Popular'},
    {value: 'high price', text: 'Sort by: Highest Price'},
    {value: 'low price', text: 'Sort by: Lowest Price'}
  ];

  const handleChange = ( event ) => {
    setSort(event.target.value);
  };

  return (
    <Wrapper>
      <Content>
        <Sort name='select' value={ sort } onChange={ handleChange }>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Sort>
        <SortText>
          { numFiltered } itens
        </SortText>
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

export default HomeSort;