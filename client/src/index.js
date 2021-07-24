import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeContextProvider from './components/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <GlobalStyles />
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
