import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  padding: 15px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Sort = styled.select`
  width: 250px;
  height: 50px;
`;

export const SortText = styled.span`
  padding-left: 50px;
`;
