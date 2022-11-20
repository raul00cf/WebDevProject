import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Left, Right, Content, Button, Header, Line, Product, Description, Type, Color, Quantity, Rating, Subtotal, Name, Email, Phone } from './ProfileAdmin.styles';

import { Context } from '../../context';

import { colorDictionary, convertPrice, getRemainingColors } from '../../Helpers/functions';

import Plus from '../../images/plus.svg';


const ProfileAdmin = ({ option, setOption, setShowing, data, setData, numItems, setNumItems, emptyItem }) => {

  const [session, setSession, users, setUsers] = useContext(Context);

  const shownUsers = users.slice(1);

  const logOut = () => {
    setShowing("home");
    setSession({...session, user: null});
  }

  const clickImage = (car) => {
    setShowing(car);
  }

  const handleDescriptionChange = (index, event) => {
    let list = [...data];

    list[index].name = event.target.value;

    setData(list);
  }

  const handleTypeChange = (index, event) => {
    let list = [...data];

    list[index].type = event.target.value;

    setData(list);
  }

  const handleQuantChange = (index, event) => {
    if (event.target.value.length > 3) {
      event.target.value = event.target.value.slice(0, 3);
    }

    let list = [...data];

    list[index].stock = parseInt(event.target.value);

    setData(list);
  }

  const handleRatingChange = (index, event) => {
    let list = [...data];
    let integerPart = event.target.value.split(".")[0];
    let decimalPart = event.target.value.split(".")[1];

    console.log(parseFloat(event.target.value));


    if (parseFloat(event.target.value) > 10) {
      event.target.value = "10.0";

      list[index].popularity = 10;

      setData(list);
      return;
    }

    if (decimalPart > 1) {
      event.target.value = integerPart + '.' + decimalPart[0];
    }

    list[index].popularity = parseFloat(event.target.value);

    setData(list);
  }

  const handleRatingLoseFocus = (event) => {
    event.target.value = parseFloat(event.target.value).toFixed(1);
  }

  const handlePriceChange = (index, event) => {
    const tam = 6;

    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');

    let integerPart = event.target.value.split(".")[0];
    let decimalPart = event.target.value.split(".")[1];

    if (integerPart.length > tam) {
      event.target.value = integerPart.slice(0, tam) + "." + decimalPart;
     
      if (event.target.setSelectionRange) {
        event.target.focus();
        event.target.setSelectionRange(tam, tam);
      } else if (event.target.createTextRange) {
          var t = event.target.createTextRange();
          t.collapse(true);
          t.moveEnd('character', tam);
          t.moveStart('character', tam);
          t.select();
      }
    }

    let list = [...data];

    list[index].price = parseFloat(event.target.value);

    setData(list);
  }

  const handlePriceLoseFocus = (event) => {
    event.target.value = convertPrice(event.target.value);
  }

  const deleteItem = (index) => {
    let list = [...data];
    let instances = [];

    for (let i = index; i < data.length; i++) {
      instances.push(document.getElementById(`price${i}`));
    }

    for (let i = 0; i < instances.length-1; i++) {
      instances[i].value = instances[i+1].value;
    }

    list.splice(index, 1);

    setData(list);
  }

  const handleHoverColor = (event, index, color, on) => {
    if (on) {
      if (data[index].colors.length === 1) {
        return;
      }

      event.target.src = Plus;
      event.target.classList.add("rotate");
    }
    else {
      event.target.src = colorDictionary(color);
      event.target.classList.remove("rotate");
    }
  }

  const handleClickColor = (index, color) => {
    let list = [...data];

    if (list[index].colors.length > 1) {
      list[index].colors.splice(color, 1);
    }

    setData(list);
  }

  const handleHoverPlus = (event, index, on) => {
    const colors = getRemainingColors(data[index].colors);

    if (on) {
      event.target.src = colorDictionary(colors[0]);
    }
    else {
      event.target.src = Plus;
    }
  }

  const addColor = (index) => {
    const colors = getRemainingColors(data[index].colors);

    let list = [...data];

    list[index].colors.push(colors[0]);

    setData(list);    
  }
  
  const addItem = () => {
    let list = [...data];

    list.push({...emptyItem, id: numItems, colors: [...emptyItem.colors]});

    setNumItems(numItems+1);
    setData(list);
  }

  const deleteUser = (index) => {
    let list = [...users];

    list.splice(index+1, 1);

    setUsers(list);
  }

  console.log(data);

  return (
    <Wrapper>
      <Left>
        <p id="products" onClick={ () => { setOption("products") } } >
          Manage Products
        </p>
        <p id="users" onClick={ () => { setOption("users") } } >
          Manage Users
        </p>

        <Button onClick={ logOut }>
          Log out
        </Button>
      </Left>

      <Right>
        {option === "products" ? (
          <Content>
            <h3>
              Manage Products  
            </h3>

            <Header>
              <Product>Image</Product>
              <Description>Name</Description>
              <Type>Type</Type>
              <Color>Colors</Color>
              <Quantity>Stock</Quantity>
              <Rating>Rating</Rating>
              <Subtotal>Price</Subtotal>
              <img id="minus" src={ Plus } alt="minus" />
            </Header>

            {data.map((item, id) => (
              <Line color={ id!==data.length-1 ? "grey" : "transparent" } height={ 130 } >
                <Product>
                  <img src={ item.image } alt={ item.name } onClick={ () => { clickImage(item) } } />
                </Product>
                <Description>
                  <textarea name="description" type="text" value={ item.name } onChange={ (event) => { handleDescriptionChange(id, event) } } />
                </Description>
                <Type>
                  <select value={ item.type } onChange={ (event) => { handleTypeChange(id, event) } } >
                    {['sport', 'sedan', 'hatch', 'suv'].map((type) => (
                      <option value={ type }>{ type }</option>
                    ))}
                  </select>
                </Type>
                <Color>
                  {item.colors.map((color, colorId) => (
                    <img src={ colorDictionary(color) } alt={ color } 
                      onMouseEnter={ (event) => { handleHoverColor(event, id, color, true) } }
                      onMouseLeave={ (event) => { handleHoverColor(event, id, color, false) } }
                      onClick={ () => { handleClickColor(id, colorId) } }
                    />
                  ))}
                  {item.colors.length < 4 ? (
                    <img id="plus" src={ Plus } alt={ 'plus' } 
                      onMouseEnter={ (event) => { handleHoverPlus(event, id, true) } }
                      onMouseLeave={ (event) => { handleHoverPlus(event, id, false) } }
                      onClick={ () => { addColor(id) } } 
                    />
                  ) : (
                    <></>
                  )}
                </Color>
                <Quantity>
                  <input id="quant" type="number" value={ item.stock } onChange={ (event) => {handleQuantChange(id, event) } } />
                </Quantity>
                <Rating>
                <input id="rating" type="number" value={ parseFloat(item.popularity).toFixed(1) } 
                  onChange={ (event) => {handleRatingChange(id, event) } } 
                  onBlur={ handleRatingLoseFocus }
                />
                </Rating>
                <Subtotal>
                  <input id={ `price${ id }` } type="text" 
                    defaultValue={ convertPrice(item.price) } 
                    onChange={ (event) => { handlePriceChange(id, event) } } 
                    onClick={ (event) => { handlePriceChange(id, event) } } 
                    onBlur={ handlePriceLoseFocus } 
                  />
                </Subtotal>
                <img id="minus" class="rotate" src={ Plus } alt="minus" onClick={ () => { deleteItem(id) } } />
              </Line>
            ))}
            <Button onClick={ addItem }>
              Add Item
            </Button>
          </Content>
        ) : (
          <Content>
            <h3>
              Manage Users  
            </h3>

            <Header>
              <Name>Name</Name>
              <Email>Email</Email>
              <Phone>Phone</Phone>
              <img id="minus" src={ Plus } alt="minus" />
            </Header>

            {shownUsers.map((user, id) => (
              <Line color={ id!==shownUsers.length-1 ? "grey" : "transparent" } height={ 75 } >
                <Name>
                  { user.name }
                </Name>
                <Email>
                  { user.email }
                </Email>
                <Phone>
                  { user.phone }
                </Phone>
                <img id="minus" class="rotate" src={ Plus } alt="minus" onClick={ () => { deleteUser(id) } } />
              </Line>
            ))}
          </Content>
        )}
      </Right>
    </Wrapper>
  )
};


export default ProfileAdmin;