import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0px auto;
  border-radius: 15px;
  border: 1px solid black;  
  text-align: center;
  position: relative;

  img {
    width: 50%;
  }

  #name {
    font-weight: bold;
  }

  #stock {
    font-weight: bold;
  }

  #x {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;

    img {
      width: 20px;
    }
  }

  #horn {
    position: absolute;
    top: 12px;
    left: 12px;
    cursor: pointer;

    img {
      width: 50px;
    }
  }

  .select {
    margin: 5px auto;
    width: 80px;
    position: relative;
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
      transition: transform 0.5s;
    }
  }

  #list {
    background: white;
    margin: 0;
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
  }

  .option {
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

export const Button = styled.button`
  width: 100%;
  max-width: 440px;
  border-radius: 10px;
  border: none;
  height: 40px;
  background: red;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin: 16px auto;

  :hover {
    opacity: 0.8;
  }
`;
