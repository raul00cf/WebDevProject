import React, { useContext, useState } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Side, Tooltip, Button } from './SignIn.styles';

import Question from '../../images/question.png';

import { Context } from '../../context';
import { validateEmail, validatePhone, validatePass, validatePassCross } from '../../Helpers/functions';

const SignIn = ({ setShowing }) => {

  const [session, setSession, users, setUsers] = useContext(Context);

  const [error, setError] = useState("ERROR");


  const resetError = (instance) => {
    instance.style = "color: black;";
  }

  const resetErrorEvent = (event) => {
    resetError(event.target);
  }

  const setErrorInstance = (instance) => {
    instance.style = "color: red;";
  }

  const handleCreation = () => {
    let nameIsnt = document.getElementById("create_name");
    let emailIsnt = document.getElementById("create_email");
    let passwordIsnt = document.getElementById("create_password");
    let password2Isnt = document.getElementById("create_password2");
    let addressIsnt = document.getElementById("create_address");
    let phoneIsnt = document.getElementById("create_phone");

    let name = nameIsnt.value;
    let email = emailIsnt.value;
    let password = passwordIsnt.value;
    let password2 = password2Isnt.value;
    let address = addressIsnt.value;
    let phone = phoneIsnt.value;

    let hasError = false;

    let error = document.getElementById("error");

    resetError(nameIsnt);
    resetError(emailIsnt);
    resetError(passwordIsnt);
    resetError(password2Isnt);
    resetError(addressIsnt);
    resetError(phoneIsnt);

    if (!error.classList.contains("hide")) {
      error.classList.toggle("hide");
    }

    if (name === "") {
      hasError = true;
    }

    if (!validateEmail(email)) {
      setErrorInstance(emailIsnt);
      hasError = true;
    }

    if (password === "") {
      hasError = true;
    }
    else if (!validatePass(password)) {
      setErrorInstance(passwordIsnt);
      hasError = true;
    }

    if (password2 === "") {
      hasError = true;
    }
    else if (!validatePass(password2)) {
      setErrorInstance(password2Isnt);
      hasError = true;
    }

    if (!validatePassCross(password, password2)) {
      setErrorInstance(passwordIsnt);
      setErrorInstance(password2Isnt);
      hasError = true;
    }

    if (address === "") {
      hasError = true;
    }

    if (phone === "") {
      hasError = true;
    }

    if (!validatePhone(phone)){
      setErrorInstance(phoneIsnt);
      hasError = true;
    }

    if (hasError) {
      if (error.classList.contains("hide")) {
        error.classList.toggle("hide");
      }

      return;
    }
    setError("ERROR");

    users.forEach((user) => {
      if (user.email === email) {
        setError("Email cadastrado");
        hasError = true;
        return true;
      }
    });

    if (hasError) {
      if (error.classList.contains("hide")) {
        error.classList.toggle("hide");
      }

      return;
    }
    
    let user = {
      email: email,
      password: password,
      name: name,
      address: address,
      phone: phone,
      gender: null,
      birthday: null,
      history: []
    };

    setSession({...session, user: users.length});
    setUsers([...users, user]);
    setShowing("home");
  }

  const handleEnterCreate = (event) => {
    if (event.key === "Enter") {
      handleCreation();
    }
  }

  const handleLogin = () => {
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;

    users.forEach((user, id) => {
      if (user.email === email && user.password === password) {
        setSession({...session, user: id});
        setShowing("home");
        return true;
      }
    });
  }

  const handleEnterLogin = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  }

  const handleChangePhone = (event) => {
    resetErrorEvent(event);

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
      <Content>
        <Side>
          <h3>
            Sign in
          </h3>

          <p>
            <label>Email</label>
            <input id="login_email" type="email" name="name" onKeyDown={ handleEnterLogin } />
          </p>
          <p>
            <label>Password</label>
            <input id="login_password" type="password" name="password" onKeyDown={ handleEnterLogin } />
          </p>

          <Button onClick={ handleLogin } >
            Login
          </Button>
          <span id="forgot">
            Forgot Password?
          </span>
        </Side>
        <Side>
          <h3>
            Create account
          </h3>

          <p>
            <label>Name</label>
            <input id="create_name" type="text" name="name" onChange={ resetErrorEvent } onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>
              Email
              <div id="container">
                <Tooltip margin={ -90 } width={ 190 }>
                  <img src={ Question } alt="question" />
                  <span id="tooltiptext">format somethin@domain.end</span>
                </Tooltip>
              </div>
            </label>
            <input id="create_email" type="email" name="email" onChange={ resetErrorEvent } onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>
              Password
              <div id="container">
                <Tooltip margin={ -45 } widht={ 100 } >
                  <img src={ Question } alt="question" />
                  <span id="tooltiptext">at least 8 characters</span>
                </Tooltip>
              </div>
            </label>
            <input id="create_password" type="password" name="password" onChange={ resetErrorEvent } onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Confirm</label>
            <input id="create_password2" type="password" name="password2" onChange={ resetErrorEvent } onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Address</label>
            <input id="create_address" type="text" name="address" onChange={ resetErrorEvent } onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Phone
              <div id="container">
                <Tooltip margin={ -45 } width={ 90 } >
                  <img src={ Question } alt="question" />
                  <span id="tooltiptext">format 99999-9999</span>
                </Tooltip>
              </div>
            </label>
            <input id="create_phone" type="tel" name="phone" onChange={ handleChangePhone } onKeyDown={ handleEnterCreate } placeholder="XXXXX-XXXX" />
          </p>

          <Button onClick={ handleCreation }>
            Create
          </Button>
          <span id="error" class="hide" >
            { error }
          </span>
        </Side>
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

export default SignIn;