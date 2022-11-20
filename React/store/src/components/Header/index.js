import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Image, Buttons, Wrapper2, Content2 } from './Header.styles';

import Logo from '../../images/logo.png';
import SignIn from '../../images/sign.svg';
//import LogOut from '../../images/logout.png';
import cart_logo from '../../images/cart.svg';

import { Context } from '../../context';

const Header = ({ filter, setFilter, setOption, showing, setShowing }) => {

  const [session, , users, ] = useContext(Context);

  const handleChange = (filter) => {
    setFilter(filter);
    setShowing("home");
  }

  const handleLogo = () => {
    setShowing("home");
    console.log(session);
    console.log(users);
  }

  const handleSignin = () => {
    setShowing("signin");
  }

  const checkUser = () => {
    setShowing("profile");
    setOption(session.user ? "account" : "products");
  }

  const handleCart = () => {
    setShowing("cart");
  }

  return (
    <>
      <Wrapper>
        <Content>
          <div onClick={ handleLogo } id='logo' >
            <Image src={Logo} alt='Logo' />
          </div>
          <Buttons>
            {showing === 'signin' ? (
              <></>
            ) : (
              <>
                {session.user === null ? (
                  <div onClick={ handleSignin }>
                    <img src={SignIn} alt="sign" />
                    <span>Sign in</span>
                  </div>
                ) : (
                  <>
                    <div onClick={ checkUser }>
                      <img src={SignIn} alt="sign" />
                      <span>Profile</span>
                    </div>
                  </>
                )}
              </>
            )}
            <div onClick={ handleCart } >
              <img src={cart_logo} alt="cart" />
              <span>{session.cart.length}</span>
            </div>
          </Buttons>
        </Content>
      </Wrapper>

      <Wrapper2>
        <Content2>
          <div onClick={ () => {handleChange('sport')} } style={ { "font-weight": filter==="sport" ? "bold" : "normal" } } >
            Sports
          </div>
          <div onClick={ () => {handleChange('sedan')} } style={ { "font-weight": filter==="sedan" ? "bold" : "normal" } } >
            Sedans
          </div>
          <div onClick={ () => {handleChange('hatch')} } style={ { "font-weight": filter==="hatch" ? "bold" : "normal" } } >
            Hatches
          </div>
          <div onClick={ () => {handleChange('suv')} } style={ { "font-weight": filter==="suv" ? "bold" : "normal" } } >
            SUVs
          </div>
        </Content2>
      </Wrapper2>
    </>
  )
};

/*
HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};
*/

export default Header;