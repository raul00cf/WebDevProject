import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
`;

export const Left = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 8px 8px 5px grey;
  padding: 20px;
  position: relative;
  max-height: 650px;

  img {
    width: 208px;
  }

  p {
    cursor: pointer;
    margin: 40px auto;
  }

  #account {
    margin-top: 100px;
  }

  #history {
    margin-bottom: 100px;
  }

  button {
    position: absolute;
    bottom: 0px;
    width: 208px;
    margin-top: 50px;
  }
`;

export const Right = styled.div`
  width: 90%;
  max-width: ${props => props.maxWidth}px;
  position: relative;
  padding: 20px;
`;

export const Account = styled.div`
  width: 100%;

  h3 {
    margin: 30px;
    margin-bottom: 50px;
  }

  p {
    margin: 20px;
    display: flex;
    font-size: 18px;
  }

  label {
    display: inline-block;
    width: 150px;
    padding-top: 11px;
    position: relative;
  }

  input, select {
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

  select {
    margin-left: 10px;
  }

  #gender, #day {
    margin-left: 0px;
  }

  #gender {
    max-width: 110px;
  }

  #day {
    max-width: 70px;
  }

  #month {
    max-width: 150px;
  }

  #year {
    max-width: 90px;
  }
`;

export const Button = styled.button`
  width: 120px;
  float: right;
  border-radius: 10px;
  border: none;
  height: 40px;
  background: red;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: white;
  margin: 16px auto;

  :hover {
    opacity: 0.8;
  }
`;

export const History = styled.div`
  h3 {
    margin: 30px;
    margin-bottom: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 15px;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  height: 130px;
  justify-content: space-between;
  text-align: center;
  padding: 7px auto;
  align-items: center;
  border-bottom: 0.5px solid ${props => props.color};

  @media screen and (max-width: 1550px) {
    height: 100px;
  }

  @media screen and (max-width: 840px) {
    height: 75px;
  }
`;

export const Product = styled.span`
  width: 40%;
  
  #container {
    display: flex;
    justify-content: space-between;
  }

  #info {
    text-align: left;
    width: 40%;
    height: 120px;
    align-items: center;
  }

  #image {
    width: 50%;
  }

  img {
    float: left;
    max-width: 200px;
    max-height: 140px;
  }

  @media screen and (max-width: 1550px) {
    width: 50%;

    img {
      max-height: 90px;
    }
  }

  @media screen and (max-width: 840px) {
    
    #image {
      display: none;
    }

    #info {
      height: 75px;
      width: 100%;
    }
  }
`;

export const Color = styled.span`
  width: 80px;

  img {
    height: 30px;
  }

  div {
    margin: 5px auto;
    width: 80px;
    position: relative;
    display: block;
    background: white;
  }
`;

export const Quantity = styled.span`
  width: 100px;
`;

export const Subtotal = styled.span`
  width: 15%;
`;

export const Help = styled.div`
  width: 100%;

  h3 {
    margin: 30px;
    margin-bottom: 50px;
  }

  #email {
    text-decoration: underline;
    cursor: pointer;
  }
`;

