import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import ThemeContextProvider from './components/ThemeContext';
import UserContextProvider from './components/UserContext';

ReactDOM.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <GlobalStyles />
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
