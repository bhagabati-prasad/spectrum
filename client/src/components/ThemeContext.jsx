import { useState, createContext } from 'react';

export const ThemeContext = createContext('');

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
