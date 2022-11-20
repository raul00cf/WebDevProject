import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, VerticalLine, Logo, Follow, Contact } from './Footer.styles';

import LogoImage from '../../images/logo.png';
import Line from '../../images/line.svg';
import Facebook from '../../images/facebook.svg';
import Linkedin from '../../images/linkedin.svg';
import Twitter from '../../images/twitter.svg';
import Youtube from '../../images/youtube.svg';

import { Context } from '../../context';

import { sleep } from '../../Helpers/functions';



const Footer = ({ showing, option, filter }) => {

  const [session, , users, ] = useContext(Context);

  const [adding, setAdding] = useState(0);
  const [isShowing, setIsShowing] = useState(true);

  const func = async () => {
    await sleep(20);

    let diff = window.innerHeight - document.body.clientHeight - 200;

    if (diff > 0) {
      setAdding(diff + 200);
    }
    else {
      setAdding(0);
    }
    setIsShowing(true);
  }

  useEffect(() => {

    setAdding(0);
    setIsShowing(false);

    func()
      .catch((error) => {
        console.error(error);
    })

  }, [session, users, showing, filter, option]);

  return (
    <Wrapper adding={ adding } showing={ isShowing } >
      <Content>
        <Logo>
          <img src={ LogoImage } alt="logo" />
        </Logo>
        <Follow>
          <div id="row">
            <h5>
              Follow us
            </h5>
          </div>

          <div id="row">
            <div id="cell">
              <div id="links">
                <a href="#/">
                  <img src={ Facebook } alt="facebook" />
                </a>
                <a href="#/">
                  <img src={ Linkedin } alt="linkedin" />
                </a>
                <a href="#/">
                  <img src={ Twitter } alt="twitter" />
                </a>
                <a href="#/">
                  <img src={ Youtube } alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </Follow>
        <VerticalLine src={ Line } alt="line" />
        <Contact>
          <div id="row">
            <div id="cell">
              <h5>
                Phone
              </h5>
              <p>
                (xx) xxxxx-xxxx
              </p>
            </div>
          </div>
          <div id="row">
            <div id="cell">
              <h5>
                Email
              </h5>
              <p>
                thecarstore@mail.com
              </p>
            </div>
          </div>
        </Contact>
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

export default Footer;