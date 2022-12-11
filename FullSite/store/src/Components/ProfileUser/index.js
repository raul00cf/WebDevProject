import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Left, Right, Account, Button, History, Header, Line, Product, Color, Quantity, Subtotal, Help } from './ProfileUser.styles';

import HorizontalLine from '../../images/line2.png';

import { Context } from '../../context';

import { convertPrice, validateEmail, validatePass, validatePhone, validateDate } from '../../Helpers/functions';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const ProfileUser = ({ option, setOption, setShowing, functions }) => {

  const [session, setSession] = useContext(Context);

  const getInfo = (type) => {

    if (type === 'day' || type === 'month' || type === 'year') {
      if (session.user.birthday) {
        if (type === 'day') {
          return session.user.birthday.split('/')[0];
        }

        if (type === 'month') {
          return session.user.birthday.split('/')[1];
        }

        if (type === 'year') {
          return session.user.birthday.split('/')[2];
        }
      }
      else {
        return null;
      }
    }

    if (session.user[type]) {
      return session.user[type];
    }
    else {
      return null;
    }
  }

  const saveInformation = async () => {
    let nameIsnt = document.getElementById("name");
    let emailIsnt = document.getElementById("email");
    let genderIsnt = document.getElementById("gender");
    let dayIsnt = document.getElementById("day");
    let monthIsnt = document.getElementById("month");
    let yearIsnt = document.getElementById("year");
    let phoneIsnt = document.getElementById("phone");
    let addressIsnt = document.getElementById("address");
    let passwordIsnt = document.getElementById("password");

    let name = nameIsnt.value;
    let email = emailIsnt.value;
    let gender = genderIsnt.value;
    let day = parseInt(dayIsnt.value);
    let month = monthIsnt.value;
    let year = parseInt(yearIsnt.value);
    let phone = phoneIsnt.value;
    let address = addressIsnt.value;
    let password = passwordIsnt.value;

    console.log(name, email, gender, day, month, year, phone, address, password);

    if (!validateEmail(email)) {
      return;
    }

    if (!validatePhone(phone)) {
      return;
    }

    if (!validatePass(password) && password !== "") {
      return;
    }

    if (!validateDate(day, month, year, months)) {
      return;
    }

    session.user.name = name;
    session.user.email = email;
    session.user.gender = gender;
    session.user.birthday = `${day}/${month}/${year}`;
    session.user.phone = phone;
    session.user.address = address;
    session.user.password = password ? password : session.user.password;

    await functions.editUser(session.user._id, session.user);
    setShowing('home');
  }

  const logOut = () => {
    setShowing("home");
    setSession({...session, user: null});
  }

  const handleChangePhone = (event) => {
    let text = event.target.value;
    let newText = "";

    text = text.replace("-", "");

    text = text.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');

    newText += text.slice(0, Math.min(5, text.length));

    if (text.length > 5){
      newText += "-";
      newText += text.slice(5, text.length);
    }

    if (newText.length > 10) {
      newText = newText.slice(0, 10);
    }

    event.target.value = newText;
  }

  return (
    <Wrapper>
      <Left>
        <p id="account" onClick={ () => { setOption("account") } } >
          Account
        </p>
        <p onClick={ () => { setOption("help") } } >
          Help
        </p>
        <img id="line" src={ HorizontalLine } alt="line" />
        <p id="history" onClick={ () => { setOption("history") } } >
          Purchase History
        </p>

        <Button onClick={ logOut }>
          Log out
        </Button>
      </Left>

      <Right maxWidth={ option==="history" ? "1200" : "1000" } >
        {option === "account" ? (
          <Account>
            <h3>
              Account Settings
            </h3>

            <div id="inputs">
              <p>
                <label>Nome</label>
                <input id="name" type="text" name="name" defaultValue={ getInfo('name') } />
              </p>
              <p>
                <label>Email</label>
                <input id="email" type="email" name="email" defaultValue={ getInfo('email') } />
              </p>
              <p>
                <label>Gender</label>
                <select id="gender" defaultValue={ getInfo('gender') }>
                  <option value="other">Other</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </p>
              <p>
                <label>Birthday</label>
                <select id="day" defaultValue={ getInfo('day') } >
                  {[...Array(31).keys()].map((num) => {
                    return <option value={ num+1 } key={ num } >{ num+1 }</option>
                  })}
                </select>
                <select id="month" defaultValue={ getInfo('month') } >
                  {[...Array(12).keys()].map((num) => {
                    return <option value={ months[num] } key={ num } >{ months[num] }</option>
                  })}
                </select>
                <select id="year" defaultValue={ getInfo('year') } >
                  {[...Array(80).keys()].map((num) => {
                    return <option value={ 2004-num } key={ num } >{ 2004-num }</option>
                  })}
                </select>
              </p>
              <p>
                <label>Phone</label>
                <input id="phone" type="text" name="phone" defaultValue={ getInfo('phone') } onChange={ handleChangePhone } />
              </p>
              <p>
                <label>Address</label>
                <input id="address" type="text" name="address" defaultValue={ getInfo('address') } />
              </p>
              <p>
                <label>New Password</label>
                <input id="password" type="password" name="password" />
              </p>

              <Button onClick={ saveInformation }>
                Save
              </Button>
            </div>
          </Account>
        ) : option === "history" ? (
          <History>
            <h3>
              Purchase History
            </h3>

            <Header>
              <Product>Product</Product>
              <Color>Color</Color>
              <Quantity>Qnt</Quantity>
              <Subtotal>Subtotal</Subtotal>
            </Header>

            {session.user.history.map((item, id) => (
              <Line color={ id!==session.user.history.length-1 ? "grey" : "transparent" }>
                <Product>
                  <div id="container">
                    <div id="image">
                      <img src={ `http://${process.env.REACT_APP_IP}:5000/data/${item.image}` } alt={ item.name } />
                    </div>
                    <div id="info">
                      <p>
                        { item.name }
                      </p>
                    </div>
                  </div>
                </Product>
                <Color>
                  <img id={ "selected" + id } value={ 0 } 
                    src={ item.color } 
                    alt={ item.name } />
                </Color>
                <Quantity>
                  <p>{ item.quant }</p>
                </Quantity>
                <Subtotal>
                  { convertPrice(item.price * item.quant) }
                </Subtotal>
              </Line>
            ))}
          </History>
        ) : (
          <Help>
            <h3>
              Help
            </h3>

            <span>
              Any problem with the application, contact us on <span id="email">thecarstore@mail.com</span>
            </span>
          </Help>
        )}
      </Right>
    </Wrapper>
  )
};


export default ProfileUser;