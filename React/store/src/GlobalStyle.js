import { createGlobalStyle } from 'styled-components';
import "@fontsource/comfortaa";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Comfortaa';
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(---white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(---white);
    }
    
    a, a:hover, a:visited, a:active {
      color: inherit;
      text-decoration: none;
     }
  }
`