import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  vertical-align: top;

  @media screen and (max-width: 1400px) {
    display: block;
    margin: auto;
  }
`;

export const Side = styled.div`
  width: 45%;
  border: 1px solid black;
  border-radius: 15px;
  position: relative;

  @media screen and (max-width: 1400px) {
    width: 100%;
  }

  h3 {
    margin: 30px;
    font-size: 20px;
  }

  p {
    margin: 20px;
    display: flex;
    font-size: 18px;
  }

  label {
    display: inline-block;
    width: 130px;
    padding-top: 11px;
    position: relative;
  }

  #container {
    position: absolute;
    left: 100px;
    bottom: 15px;
  }

  img {
    height: 18px;
    max-width: 18px;
  }

  input {
    left: 100px;
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 18px;
  }

  #forgot {
    color: #494848;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;

    :hover {
      opacity: 0.8;
    }
  }

  #error {
    color: RED;
    font-size: 20px;
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    margin-top: 50px;
  }
`;

export const Tooltip = styled.div`
  position: relative;


  :hover  {
    #tooltiptext {
      display: block;
    }

    ::after {
      display: block;
    }
  }

  img {
    margin-top: 11px;
  }

  ::after {
    display: none;
    content: " ";
    position: absolute;
    bottom: 70%;
    left: 10px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: grey transparent transparent transparent;
  }

  #tooltiptext {
    width: ${props => props.width}px;
    display: none;
    text-align: center;
    border-radius: 6px;
    background: grey;
    padding: 5px;
    font-size: 14px;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 99%;
    left: 50%;
    margin-left: ${props => props.margin}px;
  }
`;

export const Button = styled.button`
  width: 20%;
  margin: 0px 20px 25px 150px;
  border-radius: 10px;
  border: none;
  height: 50px;
  background: red;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: white;

  :hover {
    opacity: 0.8;
  }
`;
