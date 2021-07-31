import styled, { css } from 'styled-components';
import { dark_theme, defaults, light_theme, media } from './_variables';

export const PortfolioFormSection = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 4rem 0 2rem 0;
  background-color: ${light_theme.portfolio_body_bg};
  ${({ darkMode }) =>
    darkMode === 'dark' &&
    css`
      background-color: ${dark_theme.body_bg};
      ${SingleInputBox} {
        label {
          color: ${defaults.light_grey};
        }
        input,
        select,
        textarea {
          color: ${dark_theme.portfolio_op_body_bg};
          background-color: #222;
          border-color: #333;
        }
      }
    `}
`;

export const InputGroupHeading = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 3rem;
    background-color: ${light_theme.portfolio_op_body_bg};
  }
  h4 {
    color: #222;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h1 {
    color: #444;
    font-size: 3.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    text-transform: capitalize;
    @media ${media.sm} {
      font-size: 3rem;
    }
  }
  ${({ darkMode }) =>
    darkMode === 'dark' &&
    css`
      &::before {
        background-color: ${dark_theme.portfolio_op_body_bg};
      }
      h4 {
        color: #eee;
      }
      h1 {
        color: #fff;
      }
    `}
`;

export const InputGroupBox = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  h5 {
    color: ${light_theme.portfolio_op_body_bg};
  }
  button {
    width: 100%;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: ${defaults.primary_color};
    color: ${light_theme.portfolio_body_bg};
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0.57rem 0;
    &.add_project_btn {
      width: auto;
      display: flex;
      text-transform: capitalize;
      color: ${light_theme.portfolio_body_bg};
      background-color: ${light_theme.portfolio_op_body_bg};
      border: 1px solid #ccc;
    }
  }
  ${({ darkMode }) =>
    darkMode === 'dark' &&
    css`
      background-color: ${dark_theme.body_bg};
      border-color: #333;
      h5 {
        color: ${dark_theme.portfolio_op_body_bg};
      }
      button.add_project_btn {
        color: ${dark_theme.portfolio_op_body_bg};
        background-color: ${dark_theme.portfolio_op_body_bg_darker};
      }
    `}
`;

export const SingleInputBox = styled.div`
  margin: 1rem 0;
  label {
    color: ${light_theme.portfolio_op_body_bg};
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    margin-bottom: 7px;
  }
  input,
  select,
  textarea {
    width: 100%;
    color: ${light_theme.portfolio_op_body_bg};
    letter-spacing: 0.4px;
    background-color: #eee;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 0.44rem;
    transition: all 0.24s;
  }
  textarea {
    min-height: 8.4rem;
    max-height: 10rem;
  }
`;
