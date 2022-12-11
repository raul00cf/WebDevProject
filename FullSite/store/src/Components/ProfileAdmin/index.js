import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import { Wrapper, Left, Right, Content, Button, Header, Line, Product, Horn, Description, Type, Color, Quantity, Rating, Subtotal, Name, Email, Phone } from './ProfileAdmin.styles';

import { Context } from '../../context';

import { colorDictionary, convertPrice, getRemainingColors } from '../../Helpers/functions';

import Plus from '../../images/plus.svg';
import HornIcon from '../../images/horn.png';


const ProfileAdmin = ({ option, setOption, setShowing, data, setData, functions, users, setUsers }) => {

  const [session, setSession] = useContext(Context);

  const [optImage, setOptImage] = useState({id: 0, show: false});
  const [optAudio, setOptAudio] = useState({id: 0, show: false});

  useEffect(() => {
    const attUsers = async () => {
      setUsers(await functions.fetchUsers());
      await functions.fetchProducts();
    }

    attUsers();
  }, []);

  const shownUsers = users.length > 0 ? users.slice(1) : [];

  const logOut = () => {
    setShowing("home");
    setSession({...session, user: null});
  }

  const itemEdited = (index, colorsParams=null) => {
    const name = document.getElementById(`name-${index}`).value;
    const type = document.getElementById(`type-${index}`).value;
    const image = document.getElementById(`image-${index}`).src.split('data/')[1];
    const price = document.getElementById(`price-${index}`).value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
    const rating = document.getElementById(`rating-${index}`).value;
    const stock = document.getElementById(`stock-${index}`).value;
    const audio = document.getElementById(`audio-${index}`).alt;
    let colors = [];

    if (colorsParams) {
      colors = colorsParams;
    }
    else {
      const helper = document.getElementsByClassName(`colors-${index}`);

      for (let i = 0; i < helper.length; i++) {
        colors.push(helper[i].alt);
      }
    }

    const newProduct = {
      name: name,
      type: type,
      image: image,
      price: parseFloat(price),
      rating: parseFloat(rating),
      stock: parseInt(stock),
      colors: colors,
      audio: audio
    }

    functions.editProduct(data[index]['_id'], newProduct);
  }

  const resetOptImage = () => setOptImage({...optImage, show: false});
  const resetOptAudio = () => setOptAudio({...optAudio, show: false});

  const clickImage = (index, event) => {
    setOptImage({id: index, show: true});
  }

  const addImage = async () => {
    const file = document.getElementById('inputImage').files[0];
    const index = optImage.id;

    if (file && file.type.match(/^image/)) {
      let imagePath = await functions.sendImage(file);

      if (imagePath !== "") {
        let list = [...data];

        list[index].image = imagePath;

        setData(list);
        itemEdited(index);
      }

      resetOptImage();
    }
  }

  const clickHorn = (index, event) => {
    setOptAudio({id: index, show: true});
  }

  const addAudio = async () => {
    const file = document.getElementById('inputAudio').files[0];
    const index = optAudio.id;

    if (file && file.type.match(/^audio/)) {
      let audioPath = await functions.sendAudio(file);

      if (audioPath !== "") {
        let list = [...data];

        list[index].audio = audioPath;

        setData(list);
        itemEdited(index);
      }

      resetOptAudio();
    }
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
    itemEdited(index);
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

      list[index].rating = 10;

      setData(list);
      return;
    }

    if (decimalPart > 1) {
      event.target.value = integerPart + '.' + decimalPart[0];
    }

    list[index].rating = parseFloat(event.target.value);

    setData(list);
  }

  const handleRatingLoseFocus = (index, event) => {
    event.target.value = parseFloat(event.target.value).toFixed(1);
    itemEdited(index);
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

  const handlePriceLoseFocus = (index, event) => {
    event.target.value = convertPrice(event.target.value);
    itemEdited(index);
  }

  const deleteItem = (index) => {
    functions.deleteProduct(data[index]['_id'], index);
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
    itemEdited(index, list[index].colors);
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
    itemEdited(index, list[index].colors);
  }
  
  const addItem = () => {
    functions.addProduct();
  }

  const deleteUser = async (index) => {
    await functions.deleteUser(users[index+1]._id);

    let list = [...users];

    list.splice(index+1, 1);

    setUsers(list);
  }

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
              <div id="content">
                <div id="product-horn-name">
                  <Product>Image</Product>
                  <Horn>Horn</Horn>
                  <Description>Name</Description>
                </div>
                <div id="type-color-stock-rating-price">
                  <Type>Type</Type>
                  <Color>Colors</Color>
                  <Quantity>Stock</Quantity>
                  <Rating>Rating</Rating>
                  <Subtotal>Price</Subtotal>
                </div>
              </div>
              <img id="minus" src={ Plus } alt="minus" />
            </Header>

            {data.map((item, id) => (
              <Line key={ id } id={ `line-${id}` } color={ id!==data.length-1 ? "grey" : "transparent" } height={ 130 } >
                <div id="content">
                  <div id="product-horn-name">
                    <Product>
                      <img id={ `image-${id}` } src={  `http://${process.env.REACT_APP_IP}:5000/data/${item.image}` } alt={ item.name } onClick={ (event) => { clickImage(id, event) } } />
                    </Product>
                    <Horn>
                      <img id={ `audio-${id}` } src={ HornIcon } alt={ item.audio } onClick={ (event) => { clickHorn(id, event) } } />
                    </Horn>
                    <Description>
                      <textarea id={ `name-${id}` } name="description" type="text" value={ item.name } 
                        onChange={ (event) => { handleDescriptionChange(id, event) } }
                        onBlur={ () => { itemEdited(id) } }
                      />
                    </Description>
                  </div>
                  <div id="type-color-stock-rating-price">
                    <Type>
                      <select id={ `type-${id}` } value={ item.type } onChange={ (event) => { handleTypeChange(id, event) } } >
                        {['sport', 'sedan', 'hatch', 'suv'].map((type) => (
                          <option value={ type }>{ type }</option>
                        ))}
                      </select>
                    </Type>
                    <Color>
                      {item.colors.map((color, colorId) => (
                        <img class={ `colors-${id}` } src={ colorDictionary(color) } alt={ color } 
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
                      <input id={ `stock-${id}` } type="number" value={ item.stock } 
                        onChange={ (event) => {handleQuantChange(id, event) } }
                        onBlur={ () => { itemEdited(id) } }   
                      />
                    </Quantity>
                    <Rating>
                    <input id={ `rating-${id}` } type="number" value={ parseFloat(item.rating).toFixed(1) } 
                      onChange={ (event) => {handleRatingChange(id, event) } } 
                      onBlur={ (event) => { handleRatingLoseFocus(id, event) } }
                    />
                    </Rating>
                    <Subtotal>
                      <input id={ `price-${ id }` } type="text" 
                        defaultValue={ convertPrice(item.price) } 
                        onChange={ (event) => { handlePriceChange(id, event) } } 
                        onClick={ (event) => { handlePriceChange(id, event) } } 
                        onBlur={ (event) => { handlePriceLoseFocus(id, event) } } 
                      />
                    </Subtotal>
                  </div>
                </div>
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
              <Line key={ id } color={ id!==shownUsers.length-1 ? "grey" : "transparent" } height={ 75 } >
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

      <Modal show={ optImage.show } onHide={ resetOptImage }>
        <Modal.Header closeButton>
          <Modal.Title>
            Image { data[optImage.id].name }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input id="inputImage" type="file" />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={ resetOptImage }>
            Cancel
          </button>
          <button variant="primary" onClick={ addImage }>
            Send Image
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={ optAudio.show } onHide={ resetOptAudio }>
        <Modal.Header closeButton>
          <Modal.Title>
            Audio { data[optImage.id].name }
          </Modal.Title>
        </Modal.Header>
          <Modal.Body>
          <input id="inputAudio" type="file" />
          </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={ resetOptAudio }>
            Cancel
          </button>
          <button variant="primary" onClick={ addAudio }>
            Send Audio
          </button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  )
};


export default ProfileAdmin;