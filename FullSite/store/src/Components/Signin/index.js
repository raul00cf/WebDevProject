import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';

// Styles
import { Wrapper, Content, Side, Tooltip, Button } from './SignIn.styles';

import Question from '../../images/question.png';

import { Context } from '../../context';
import { validateEmail, validatePhone, validatePass, validatePassCross } from '../../Helpers/functions';

const SignIn = ({ setShowing, functions }) => {

  const [session, setSession] = useContext(Context);

  const [login, setLogin] = useState({ text: "", title: "", show: false });
  const [signin, setSignin] = useState({ text: [], title: "", show: false });

  const resetLogin = () => setLogin({...login, show: false });
  const resetSignin = () => setSignin({...signin, show: false }); 


  const handleCreation = async () => {
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

    let errors = [];

    if (name === "") {
      errors.push("Invalid Name");
    }

    if (!validateEmail(email)) {
      errors.push("Invalid Email");
    }

    if (password === "" || !validatePass(password)) {
      errors.push("Invalid Password");
    }

    if (password2 === "" || !validatePass(password2)) {
      errors.push("Invalid Password Confirmation");
    }

    if (!validatePassCross(password, password2)) {
      errors.push("Different Passwords");
    }

    if (address === "") {
      errors.push("Invalid Address");
    }

    if (phone === "" || !validatePhone(phone)) {
      errors.push("Invalid Phone");
    }

    if (errors.length > 0) {
      setSignin({
        title: "SignIn Error",
        text: errors,
        show: true
      })

      return;
    }

    const users = await functions.checkUser(email);

    if (users.length !== 0) {
      setSignin({
        title: "SignIn Error",
        text: ["Email already registered"],
        show: true
      });

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

    setSession({...session, user: user});
    await functions.addUser(user);
    setShowing("home");
  }

  const handleEnterCreate = (event) => {
    if (event.key === "Enter") {
      handleCreation();
    }
  }

  const handleLogin = async () => {
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;

    const user = await functions.fetchUser(email, password);

    if (user) {
      setSession({...session, user: user});
      setShowing("home");
    }
    else {
      let users = await functions.checkUser(email);
      
      if (users.length !== 0) {
        if (users[0].email !== "admin") {
          setLogin({
            title: "Login Error",
            text: "Incorrect Password",
            show: true
          });
        }
      }
      else {
        setLogin({
          title: "Login Error",
          text: "Email not registered",
          show: true
        });
      }
    }
  }

  const handleEnterLogin = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
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

  const handleForgotPassword = async () => {
    const email = document.getElementById("login_email").value;
    let users = await functions.checkUser(email);

    if (users.length !== 0) {
      if (users[0].email !== "admin") {
        setLogin({
          title: "Password reset",
          text: "Password: " + users[0].password,
          show: true
        });
      }
    }
    else {
      setLogin({
        title: "Password reset",
        text: "Enter a valid email in the Login area",
        show: true
      });
    }
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
          <span id="forgot" onClick={ handleForgotPassword }>
            Forgot Password?
          </span>

          <Modal show={ login.show } onHide={ resetLogin }>
            <Modal.Header closeButton>
              <Modal.Title>
                { login.title }
              </Modal.Title>
            </Modal.Header>
              <Modal.Body>
                { login.text }
              </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={ resetLogin }>
                Ok
              </button>
            </Modal.Footer>
          </Modal>
        </Side>
        <Side>
          <h3>
            Create account
          </h3>

          <p>
            <label>Name</label>
            <input id="create_name" type="text" name="name" onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Email</label>
            <input id="create_email" type="email" name="email" placeholder='something@domain.end' onKeyDown={ handleEnterCreate } />
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
            <input id="create_password" type="password" name="password" onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Confirm</label>
            <input id="create_password2" type="password" name="password2" onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Address</label>
            <input id="create_address" type="text" name="address" onKeyDown={ handleEnterCreate } />
          </p>
          <p>
            <label>Phone</label>
            <input id="create_phone" type="tel" name="phone" onChange={ handleChangePhone } onKeyDown={ handleEnterCreate } placeholder="XXXXX-XXXX" />
          </p>

          <Button onClick={ handleCreation }>
            Create
          </Button>

          <Modal show={ signin.show } onHide={ resetSignin }>
            <Modal.Header closeButton>
              <Modal.Title>
                { signin.title }
              </Modal.Title>
            </Modal.Header>
              <Modal.Body>
              { signin.text.map((line, id) => (
                <p key={ id }>
                  { line }
                </p>
              )) }
              </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={ resetSignin }>
                Ok
              </button>
            </Modal.Footer>
          </Modal>
        </Side>
      </Content>
    </Wrapper>
  )
};


export default SignIn;