import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background: red;
  margin-top: calc(50px + ${props => props.adding}px - ${props => props.adding > 0 ? '200px' : '0px'});
  display: ${props => props.showing ? 'block' : 'none'};

  @media screen and (max-width: 700px) {
    height: fit-content;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const VerticalLine = styled.img`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.div`
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  background: white;

  img {
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Follow = styled.div`
  height: 100%;
  width: 35%;
  max-width: 400px;
  text-align: center;
  display: table;
  align-items: center;

  #row {
    display: table-row;
  }

  h5 {
    margin: 0px;
    vertical-align: middle;
    display: table-cell;
  }

  #cell {
    vertical-align: middle;
    display: table-cell;
  }

  #links {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 40px;
    }
  }
`;

export const Contact = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  p {
    font-size: 12px;
  }

  @media screen and (max-width: 1550px) {
    display: table;

    #row {
      display: table-row;
    }

    #cell {
      vertical-align: middle;
      display: table-cell;
    }

    h5, p {
      margin: 0;
    }
  }
`;
