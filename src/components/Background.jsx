import { createGlobalStyle } from "styled-components";
import background from '../theme/background/background.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;

const Background = () => {
  return (
    <>
      <GlobalStyle />
    </>
  )
};

export default Background;