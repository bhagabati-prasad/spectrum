import { createGlobalStyle } from 'styled-components';

// scrollbar
const scrollbar_bg = '#0c0c0c';
const scrollbar_fill = '#1e90ff';

// selection
const selection_bg = 'rgba(53, 141, 255, 0.562)';
const selection_color = '#fff';

const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar {
    width: 10px;
    background-color: #222;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbar_bg};
    border-top: 2px solid ${scrollbar_fill};
    border-bottom: 2px solid ${scrollbar_fill};
    box-shadow: inset 0 0 7px ${scrollbar_fill};
  }

  ::selection {
    background-color: ${selection_bg};
    color: ${selection_color};
  }

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
  position: relative;
}
`;

export default GlobalStyles;
