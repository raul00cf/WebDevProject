import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  margin: auto;
`;

export const Star = styled.img`
  height: 20px;
  max-width: 20px;
`;

export const CropedStar = styled.img`
  height: 20px;
  max-width: ${props => props.width}px;
  object-fit: cover;
  object-position: ${props => props.start}px 0px;
`;

export const Tooltip = styled.div`
  position: relative;

  :hover  {
    #tooltiptext {
      display: block;
    }

    ::after {
      display: block;
    }
  }

  #tooltiptext {
    display: none;
    width: 70px;
    text-align: center;
    border-radius: 6px;
    background: grey;
    padding: 5px;
    color: yellow;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 99%;
    left: 50%;
    margin-left: -35px;
  }

  ::after {
    display: none;
    content: " ";
    position: absolute;
    top: 60%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent grey transparent;
  }
`;
