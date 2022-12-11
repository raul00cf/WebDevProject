import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;

  @media screen and (max-width: 1400px) {
    display: block;
  }
`;

export const Left = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 8px 8px 5px grey;
  padding: 20px;
  position: relative;
  max-height: 650px;
  margin-right: 20px;

  img {
    width: 208px;
  }

  p {
    cursor: pointer;
    margin: 40px auto;
  }

  #products {
    margin-top: 100px;
  }

  #users {
    margin-bottom: 100px;
  }

  button {
    position: absolute;
    bottom: 0px;
    width: 173px;
    margin-top: 50px;
  }

  @media screen and (max-width: 1400px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    vertical-align: middle;

    #products {
      margin-top: 0;
    }

    p {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    #users {
      margin-bottom: 0;
    }

    button {
      position: static;
      margin: 0;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  position: relative;
  padding: 20px;
`;

export const Button = styled.button`
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

export const Content = styled.div`
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

  img {
    visibility: hidden;
  }

  #product-horn-name {
    width: 49%;
    display: flex;
    justify-content: space-between;
  }

  #type-color-stock-rating-price {
    width: 51%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #content {
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    height: auto;

    #content {
      display: block;
      margin: 10px 0px;
    }

    #product-horn-name {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    #type-color-stock-rating-price {
      margin-top: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 7px auto;
  align-items: center;
  border-bottom: 0.5px solid ${props => props.color};

  .rotate {
    cursor: pointer;
    -webkit-transform:rotate(45deg);
  }

  #product-horn-name {
    width: 49%;
    height: ${props => props.height}px;
    display: flex;
    justify-content: space-between;
  }

  #type-color-stock-rating-price {
    width: 51%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #content {
    height: auto;
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    margin: 10px 0px;
  }

  @media screen and (max-width: 1000px) {
    height: auto;

    #content {
      display: block;
      margin: 10px 0px;
    }

    #product-horn-name {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;
    }

    #type-color-stock-rating-price {
      margin-top: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Product = styled.span`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    float: left;
    height: 100%;
    cursor: pointer;
  }
`;

export const Horn = styled.span`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 40px;
    cursor: pointer;
  }
`;

export const Description = styled.span`
  width: 35%; 
  height: 100%;
  align-items: start;
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 14px;
    height: 100%;
    resize: none;
    max-width: 115px;
  }

  @media screen and (max-width: 1000px) {
    width: 35%;

    textarea {
      max-width: 100%;
    }
  }
`;

export const Type = styled.span`
  width: 100px;

  select {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 18px;
    max-width: 100px;
  }

  @media screen and (max-width: 1000px) {
    select {
      font-size: 14px;
      height: 45px;
    }

    option {
      font-size: 14px;
    }
  }
`;

export const Color = styled.span`
  width: 80px;

  img {
    height: 20px;
  }

  div {
    margin: 5px auto;
    width: 80px;
    position: relative;
    display: block;
    background: white;
  }

  .rotate {
    cursor: pointer;
    -webkit-transform:rotate(45deg);
  }

  #plus {
    cursor: pointer;
  }
`;

export const Quantity = styled.span`
  width: 60px;

  input {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 18px;
    max-width: 60px;
    text-align: center;

    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 60px;
    
    input {
      font-size: 14px;
      height: 45px;
    }
  }
`;

export const Rating = styled.span`
  width: 60px;

  input {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 18px;
    max-width: 60px;
    text-align: center;

    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      font-size: 14px;
      height: 45px;
    }
  }
`;

export const Subtotal = styled.span`
  width: 130px;

  input {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 18px;
    max-width: 130px;
    text-align: center;

    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      font-size: 14px;
      height: 45px;
    }
  }
`;

export const Name = styled.span`
  width: 20%;
`;

export const Email = styled.span`
  width: 40%;
`;

export const Phone = styled.span`
  width: 20%;
`;

