import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0px;
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  border-radius: 20px;
  border: 1px solid black;
  padding: 20px;
  padding-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 15px;
  align-items: center;
  border-bottom: 0.5px solid grey;
`;

export const Line = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  text-align: center;
  padding: 7px auto;
  border-bottom: 0.5px solid grey;
  align-items: center;

`;

export const Product = styled.span`
  width: 70%;
  
  #container {
    display: flex;
    justify-content: space-between;
  }

  #info {
    text-align: left;
    width: 40%;
    position: relative;
    height: 140px;

    p {
      margin: 0;
      position: absolute;
      top: 0px;
    }

    h3 {
      margin: 0;
      position: absolute;
      bottom: 0px;
    }
  }

  #image {
    width: 50%;

    img {
      cursor: pointer;
    }
  }

  img {
    float: left;
    max-width: 250px;
    max-height: 140px;
  }

  @media screen and (max-width: 900px) {
    width: 40%.;


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
    height: 20px;
  }

  #select {
    margin: 5px auto;
    width: 80px;
    position: relative;
    display: block;
    background: white;
  }

  #selectField {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;

    img {
      width: 20px;
      height: auto;
      transition: transform 0.5s;
    }
  }

  .list {
    position: absolute;
    background: white;
    margin: 0;
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    padding: 0px;
    z-index: 10;
  }

  #option {
    width: 100%;
    padding: 10px;
    list-style: none;
    cursor: pointer;
    box-sizing: border-box;
    z-index: 9;

    img {
      width: 20px;
    }
  }

  .option:hover {
    opacity: 0.7;
  }

  .hide {
    display: none;
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

export const Quantity = styled.span`
  width: 100px;

  #container {
    width: 100%;
    display: flex;
  }

  #tooltip {
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
      bottom: 75%;
      left: 36%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: grey transparent transparent transparent;
    }
  }

  #tooltiptext {
    display: none;
    width: 70px;
    text-align: center;
    border-radius: 6px;
    background: grey;
    padding: 5px 0;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 99%;
    left: 50%;
    margin-left: -38px;
  }

  #quant {
    -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
    border: 1px solid #494848;
    border-radius: 3px;
    padding: 10px;
    flex: 1;
    font-size: 18px;
    width: 45px;
    text-align: center;

    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  img {
    width: 25;
    cursor: pointer;
  }

  #minus {
    margin-right: 10px;
  }

  #plus {
    margin-left: 10px;
    visibility: ${props => props.showPlus ? "visible" : "hidden"};
  }

  .rotate {
    -webkit-transform:rotate(45deg);
  }
`;

export const Subtotal = styled.span`
  width: 15%;
`;

export const Total = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  text-align: center;
  padding: 7px auto;
  align-items: center;

  #total {
    color: grey;
  }

  #value {
    font-weight: bold;
    margin-left: 10px;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  width: 200px;
  margin: 0;
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
