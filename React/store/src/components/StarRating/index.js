import React from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Star, CropedStar, Tooltip } from './StarRating.styles';

import StarOn from '../../images/star_on.png';
import StarOff from '../../images/star_off.png';


const StarRating = ({ rating }) => {

  let numOn = parseInt(rating);
  let numOff = 9 - parseInt(rating);
  let diff = rating - parseInt(rating);

  let widthOn = diff * 20;
  let widthOff = 20 - widthOn;

  let startOn = 0;
  let startOff = -widthOn;

  return (
    <Wrapper>
      <Tooltip>
        {Array.from(Array(numOn), (e, i) => {
          return <Star src={ StarOn } alt="star on" key={ i } />
        })}
        {rating !== 10 ? (
          <>
            <CropedStar src={ StarOn } alt="star croped on" width={ widthOn } start={ startOn } />
            <CropedStar src={ StarOff } alt="star croped off" width={ widthOff } start={ startOff } />
          </>
        ) : (
          <></>
        )}
        {numOff >= 1 && Array.from(Array(numOff), (e, i) => {
          return <Star src={ StarOff } alt="star off" key={ 10-i } />
        })}
        <span id="tooltiptext">{ rating }</span>
      </Tooltip>
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

export default StarRating;