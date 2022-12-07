import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Button } from './Checkout.styles';

import { Context } from '../../context';

import { convertPrice, eraseCart, colorDictionary } from '../../Helpers/functions';

const Checkout = ({ data, setData, setShowing, functions }) => {

  const [session, setSession] = useContext(Context);

  const getTotal = () => {
    let sum = 0;

    session.cart.forEach((item) => {
      sum += item.car.price * item.quant;
    })

    return convertPrice(sum);
  }

  const handleChange = (event) => {
    let text = event.target.value;
    let newText = "";

    text = text.replaceAll(" ", "");

    text = text.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
    
    for (let i = 0; i < text.length; i += 4) {
      if (i) {
        newText += " ";
      }

      newText += text.slice(i, Math.min(i+4, text.length));
    }

    if (newText.length > 19) {
      newText = newText.slice(0, 19);
    }

    event.target.value = newText;
  }

  const checkountButton = async () => {
    let card = document.getElementById("card");

    if (!card.value.match(/^[0-9]{4}[\s][0-9]{4}[\s][0-9]{4}[\s][0-9]{4}$/im)) {
      return;
    }

    let copyCart = [];

    for (let i = 0; i < session.cart.length; i++) {
      copyCart.push({
        image: session.cart[i].car.image,
        name: session.cart[i].car.name,
        color: colorDictionary(session.cart[i].car.colors[session.cart[i].colorId]),
        quant: session.cart[i].quant,
        price: session.cart[i].car.price
      })
    }

    session.user.history = [...session.user.history, ...copyCart];
    await functions.editUser(session.user._id, session.user);

    eraseCart(session, setSession, data, setData, functions.editProduct);
    setShowing('home');
  }

  return (
    <Wrapper>
      <Content>
        <div id="information">
          <div id="left">
            <p>
              <label>Address</label>
              <input id="name" type="text" name="name" value={ session.user.address } />
            </p>
            <p>
              <label>Card Number</label>
              <input id="card" type="text" name="card" placeholder='XXXX XXXX XXXX XXXX' onChange={ handleChange } />
            </p>
          </div>
          <div id="right">
            <h1>
              Total: { getTotal() }
            </h1>
          </div>
        </div>
        
        <Button onClick={ checkountButton } >
          Confirm
        </Button>
      </Content>
    </Wrapper>
  )
};


export default Checkout;