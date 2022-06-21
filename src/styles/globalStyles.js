import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
  
  :root {
    --background-color: #fafafa;
  }
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
  }
`;

export default GlobalStyles;
