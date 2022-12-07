import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
