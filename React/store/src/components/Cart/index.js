import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

import DropDown from '../../images/dropdown.png';

import { Context } from '../../context';

// Styles
import { Wrapper, Content, Header, Line, Product, Color, Quantity, Subtotal, Total, Button } from './Cart.styles';

import { changeCart, deleteCart, convertPrice, colorDictionary } from '../../Helpers/functions';

import Minus from '../../images/minus.svg';
import Plus from '../../images/plus.svg';


const Cart = ({ setShowing }) => {

  const [session, setSession, , ] = useContext(Context);

  const changeItem = (index, color, quant) => {

    if (quant == null) {
      quant = session.cart[index].quant;
    }

    if (color == null) {
      color = session.cart[index].colorId;
    }

    changeCart(session, setSession, index, color, quant);
  }

  const handleButton = (id, diff) => {
    let quant = session.cart[id].quant + diff;

    changeItem(id, null, quant);
  }

  const deleteItem = (index) => {
    deleteCart(session, setSession, index);
  }

  const handleChangeColor = (color, colorId, id) => {
    let selectedOption = document.getElementById("selected" + id);

    selectedOption.src = colorDictionary(color);

    changeItem(id, colorId, null);
    hideOptions(id);
  }

  const hideOptions = (id) => {
    let list = document.getElementById("list" + id);
    let arrow = document.getElementById("arrow" + id);

    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  }

  const getTotal = () => {
    let sum = 0;

    session.cart.forEach((item) => {
      sum += item.car.price * item.quant;
    })

    return convertPrice(sum);
  }

  const checkout = () => {
    if (session.user) {
      setShowing("checkout");
    }
    else {
      if (session.user === 0) {
        setSession({...session, user: null});
      }
      setShowing("signin");
    }
  }

  const clickImage = (car) => {
    setShowing(car);
  }

  const checkMaxOfCar = (index) => {
    let onCart = 0;

    session.cart.forEach((item) => {
      if (item.car.name === session.cart[index].car.name) {
        onCart += item.quant;
      }
    });
  
    if (onCart === session.cart[index].car.stock) {
      return false;
    }

    return true;
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Product>Product</Product>
          <Color>Color</Color>
          <Quantity>Qnt</Quantity>
          <Subtotal>Subtotal</Subtotal>
        </Header>

        {session.cart.map((item, id) => (
          <Line>
            <Product>
              <div id="container">
                <div id="image">
                  <img src={ item.car.image } alt={ item.car.name } onClick={ () => { clickImage(item.car) } } />
                </div>
                <div id="info">
                  <p>
                    { item.car.name }
                  </p>
                  <h3>
                    { convertPrice(item.car.price) }
                  </h3>
                </div>
              </div>
            </Product>
            <Color>
            <div id="select" >
              <div id="selectField" onClick={ () => { hideOptions(id) } }>
                <img id={ "selected" + id } value={ 0 } 
                  src={ colorDictionary(item.car.colors[item.colorId]) } 
                  alt={ item.car.colors[item.colorId] } />
                <img id={ "arrow" + id } class="rotate" src={ DropDown } alt="dropdown" />
              </div>

              <ul id={ "list" + id } class="list hide">
                {item.car.colors.map((color, colorId) => (
                  <li key={ colorId } id="option" onClick={ () => { handleChangeColor(color, colorId, id) } } >
                    <img src={ colorDictionary(color) } alt={ color } />
                  </li>
                ))}
              </ul>
            </div>
            </Color>
            <Quantity showPlus={ checkMaxOfCar(id) } >
              <div id="container">
                {item.quant === 1 ? (
                  <div id="tooltip">
                    <img id="minus" class="rotate" src={ Plus } alt="minus" onClick={ () => { deleteItem(id) } } />
                    <span id="tooltiptext">delete</span>
                  </div>
                ) : (
                  <img id="minus" src={ Minus } alt="minus" onClick={ () => { handleButton(id, -1) } } />
                )}
                <input disabled id="quant" type="number" value={ item.quant } />
                <img id="plus" src={ Plus } alt="plus" onClick={ () => { handleButton(id, 1) } } />
              </div>
            </Quantity>
            <Subtotal>
              { convertPrice(item.car.price * item.quant) }
            </Subtotal>
          </Line>
        ))}
      <Total>
        <Button onClick={ checkout }>
          CHECKOUT
        </Button>
          <div>
            <span id="total">Total</span>
            <span id="value">{ getTotal() }</span>
          </div>
        </Total>
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

export default Cart;