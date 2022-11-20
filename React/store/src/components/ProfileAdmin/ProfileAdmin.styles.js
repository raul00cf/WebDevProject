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

  #products {
    margin-top: 100px;
  }

  #users {
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
  max-width: 1200px;
  position: relative;
  padding: 20px;
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
`;

export const Line = styled.div`
  display: flex;
  height: ${props => props.height}px;
  justify-content: space-between;
  text-align: center;
  padding: 7px auto;
  align-items: center;
  border-bottom: 0.5px solid ${props => props.color};

  .rotate {
    cursor: pointer;
    -webkit-transform:rotate(45deg);
  }

  @media screen and (max-width: 1550px) {
    height: 100px;
  }

  @media screen and (max-width: 840px) {
    height: 75px;
  }
`;

export const Product = styled.span`
  width: 20%;
  
  img {
    float: left;
    height: 120px;
    cursor: pointer;
  }
`;

export const Description = styled.span`
  width: 20%;
  align-items: start;

  textarea {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 14px;
    height: 100px;
    resize: none;
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
  width: 100px;

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
`;

export const Subtotal = styled.span`
  width: 15%;

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
`;

export const Name = styled.span`
  width: 20%;
`;

export const Email = styled.span`
  width: 20%;
`;

export const Phone = styled.span`
  width: 20%;
`;

