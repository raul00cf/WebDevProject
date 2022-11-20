import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

import StarRating from '../StarRating';

// Styles
import { Wrapper, Content, Button } from './CarMain.styles';

import X from '../../images/x.svg';
import DropDown from '../../images/dropdown.png';
import Horn from '../../images/horn.png';

import { Context } from '../../context';

import { addCart, colorDictionary, convertPrice } from '../../Helpers/functions';

const CarMain = ({ car, setShowing }) => {

  const [session, setSession, , ] = useContext(Context);

  const handleChange = (color, id) => {
    let selectedOption = document.getElementById("selected");

    selectedOption.src = colorDictionary(color);
    selectedOption.key = id;
    hideOptions();
  }

  const hideOptions = () => {
    let list = document.getElementById("list");
    let arrow = document.getElementById("arrow");

    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  }

  const handleX = () => {
    setShowing('home');
  }

  const handleHorn = () => {
    let audio = new Audio(car.audio);

    audio.play();
  }

  const addToCart = () => {
    let selectedOption = document.getElementById("selected");

    if (selectedOption.key === undefined) {
      addCart(session, setSession, car, 0);
    }
    else {
      addCart(session, setSession, car, selectedOption.key);
    }
  }

  return (
    <Wrapper>
      <Content>
        <p id="name">
          { car.name } <StarRating rating={ car.popularity } />
        </p>
        <img src={ car.image } alt={ car.name } />
        <p id="stock" >
          { car.stock } in stock
        </p>
        <div class="select" >
          <div id="selectField" onClick={ hideOptions }>
            <img id="selected" value={ 0 } src={ colorDictionary(car.colors[0]) } alt={ car.colors[0] } />
            <img id="arrow" class="rotate" src={ DropDown } alt="dropdown" />
          </div>

          <ul id="list" class="hide">
            {car.colors.map((color, id) => (
              <li key={ id } class="option" onClick={ () => { handleChange(color, id) } } >
                <img src={ colorDictionary(color) } alt={ color } />
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={ addToCart }>
          Adicionar ao Carrinho - { convertPrice(car.price) }
        </Button>
        <div onClick={ handleX } id='x' >
          <img src={ X } alt="x" />
        </div>
        <div onClick={ handleHorn } id='horn' >
          <img src={ Horn } alt="horn" />
        </div>
      </Content>
    </Wrapper>
  )
};


export default CarMain;