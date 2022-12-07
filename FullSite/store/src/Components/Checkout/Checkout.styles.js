import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  margin: 50px auto;
  border-radius: 20px;
  border: 1px solid black;
  text-align: right;

  #information {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #left {
    width: 40%;

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

    input {
      -webkit-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
      -moz-box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
      box-shadow: -2px 2px 10px 0px rgba(50, 50, 50, 0.22);
      border: 1px solid #494848;
      border-radius: 3px;
      padding: 10px;
      flex: 1;
      font-size: 18px;
    }
  }

  #right {
    width: 30%;

    h1 {
      margin-top: 60px;
      font-size: 24px;
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  border-radius: 10px;
  border: none;
  height: 50px;
  background: red;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: white;
  margin: 20px;

  :hover {
    opacity: 0.8;
  }
`;
