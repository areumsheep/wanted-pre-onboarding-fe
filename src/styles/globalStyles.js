import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
  
  :root {
    --gray-background-color: #fafafa;
    --white-background-color:#ffffff;
    --border-color: #dbdbdb;
  }
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
  }
`;

export default GlobalStyles;
