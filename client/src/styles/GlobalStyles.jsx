import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;900&family=Poppins:wght@200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
}
`;

export default GlobalStyles;
