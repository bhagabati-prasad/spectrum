import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ThemeContext } from './ThemeContext';
import { dark_theme, light_theme } from '../styles/_variables';

export const ThemeSettings = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
`;

const ButtonContainer = styled.div`
  height: 2.9rem;
  width: 2.9rem;
  display: grid;
  place-items: center;
  margin: 0.5rem 0;
`;

const EditButton = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  outline: none;
  border: none;
  color: ${light_theme.setting_color};
  text-decoration: none;
  background-color: ${light_theme.setting_bg};
  border-radius: 7px;
  border: 2px solid ${light_theme.setting_border};
  transition: all 0.24s;
  &:hover {
    color: #1e90ff;
  }
  ${({ darkMode }) =>
    darkMode === 'dark' &&
    css`
      color: ${dark_theme.setting_color};
      background-color: ${dark_theme.setting_bg};
      border: 2px solid ${dark_theme.setting_border};
    `}
`;

const ThemeToggleButton = styled.button`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  outline: none;
  border: none;
  color: ${light_theme.setting_color};
  text-decoration: none;
  background-color: ${light_theme.setting_bg};
  border-radius: 7px;
  border: 2px solid ${light_theme.setting_border};
  transition: all 0.24s;
  ${({ darkMode }) =>
    darkMode === 'dark' &&
    css`
      color: ${dark_theme.setting_color};
      background-color: ${dark_theme.setting_bg};
      border: 2px solid ${dark_theme.setting_border};
    `}
`;

const ThemeToggleSetting = ({ editBtn = true }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeSettings>
      <ButtonContainer>
        <EditButton to='/edit' className={editBtn === true ? '' : 'd-none'}>
          <i className='fas fa-user-edit'></i>
        </EditButton>
      </ButtonContainer>
      <ButtonContainer>
        <ThemeToggleButton darkMode={theme} onClick={handleToggle}>
          {theme === 'light' ? (
            // theme
            <i className='fas fa-moon'></i>
          ) : (
            <i className='fas fa-sun'></i>
          )}
        </ThemeToggleButton>
      </ButtonContainer>
    </ThemeSettings>
  );
};

export default ThemeToggleSetting;
