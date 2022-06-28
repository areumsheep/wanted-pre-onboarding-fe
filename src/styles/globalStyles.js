import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
  
  :root {
    --gray-background-color: #fafafa;
    --white-background-color:#ffffff;
    --border-color: #dbdbdb;
    --feed-left-right-size: 12px;
  }
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
  }
  img {
    cursor: pointer;
  }
`;

export default GlobalStyles;
