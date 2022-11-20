import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 15px;
  border: solid 1px black;
  padding: 5px;
  text-align: center;
  width: 100%;

  div {
    cursor: pointer;
  }

  span {
    font-weight: bold;
  }

  #color {
    height: 16px;
  }
`;

export const Image = styled.img`
  margin: auto;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  max-width: 100%;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 40px;
  background: red;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
