import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 170px;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  padding: 15px;
  margin: auto;
  display: flex;
  justify-content: space-between;


  #logo {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    align-items: center;

    #logo {
      width: 45%;
    }
  }
`;

export const Image = styled.img`
  height: 100%;

  @media screen and (max-width: 700px) {
    height: auto;
    width: 100%;
    max-height: 140px;
  }
`;

export const Buttons = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #B1B1B1;

  img {
    display: inline-block;
    vertical-align: middle;
    width: 29px;
    max-height: 29px;
  }

  span {
    padding: 0px 15px 0px 5px;
  }

  div {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    width: 45%;
  }
`;

export const Wrapper2 = styled.div`
  width: 100%;
  height: 70px;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
`;

export const Content2 = styled.div`
  height: 100%;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;

  div {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
