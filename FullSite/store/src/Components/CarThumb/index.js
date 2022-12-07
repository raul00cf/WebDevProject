import React, { useContext } from 'react';
//import ip from 'ip';


// Styles
import { Wrapper, Image, Button } from './CarThumb.styles';

import { Context } from '../../context';

import { addCart, colorDictionary, convertPrice } from '../../Helpers/functions';

const CarThumb = ({ car, setShowing }) => {

  const [session, setSession] = useContext(Context);

  //const IP = ip.address();

  const selectCar = () => {
    setShowing(car);
  }

  const addToCart = () => {
    addCart(session, setSession, car, 0);
  }

  return (
    <Wrapper>
      <div onClick={ selectCar }>
        <Image src={ `http://${process.env.REACT_APP_IP}:5000/data/${car.image}` } alt={ car.name } />
        <p>
          {car.name} <img id="color" alt="color" src={ colorDictionary(car.colors[0]) } /> - <span>{ convertPrice(car.price) }</span>
        </p>
      </div>
      <Button onClick={ addToCart }>
        Adicionar ao Carrinho
      </Button>
    </Wrapper>
  )
};


export default CarThumb;