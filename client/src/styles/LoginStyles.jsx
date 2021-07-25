import styled, { css } from 'styled-components';
import { dark_theme, defaults, light_theme } from './_variables';

export const LoginSection = styled.section`
  min-height: auto;
  position: relative;
  overflow: hidden;
`;

export const FormSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  .form_container {
    padding: 1.7rem 2.2rem;
    width: 22.4rem;
    max-width: 95%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 7px;
    backdrop-filter: blur(5px);
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        background: rgba(0, 0, 0, 0.4);
      `}
    h1 {
      color: ${light_theme.op_body_bg};
      font-size: 1.3rem;
      font-family: 'Montserrat', sans-serif;
      padding: 0.7rem 0;
      margin-bottom: 1rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 3rem;
        height: 2px;
        background-color: ${defaults.primary_color};
      }
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          color: ${dark_theme.op_body_bg};
        `}
    }
    form {
      display: flex;
      flex-direction: column;
      .form_row {
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0;
        a {
          text-decoration: none;
          color: ${defaults.primary_color};
          font-size: 0.9rem;
          letter-spacing: 0.4px;
          margin: 7px 9px;
        }
      }
      label {
        color: ${light_theme.op_body_bg};
        font-size: 0.92rem;
        padding: 4px 9px;
        cursor: pointer;
        ${({ darkMode }) =>
          darkMode === 'dark' &&
          css`
            color: ${dark_theme.op_body_bg};
          `}
      }
      input:not(.form-check-input) {
        padding: 0.4rem 0.9rem;
        font-size: 0.8rem;
        outline: none;
        color: ${light_theme.op_body_bg};
        letter-spacing: 0.5px;
        border: 2px solid ${defaults.primary_color};
        border-radius: 20rem;
        background: transparent;
        transition: all 0.24s;
        &:hover {
          border-color: ${defaults.primary_color + 98};
        }
        ${({ darkMode }) =>
          darkMode === 'dark' &&
          css`
            color: ${dark_theme.op_body_bg};
          `}
      }
      button {
        color: ${light_theme.op_body_bg};
        letter-spacing: 1px;
        text-transform: capitalize;
        font-size: 1.1rem;
        font-family: 'Roboto', sans-serif;
        background: ${defaults.primary_color};
        border: none;
        outline: none;
        padding: 0.3rem 0.9rem;
        margin-top: 7px;
        border-radius: 3rem;
        transition: all 0.24s;
        &:hover {
          background: ${defaults.primary_color + 98};
        }
        ${({ darkMode }) =>
          darkMode === 'dark' &&
          css`
            color: ${dark_theme.op_body_bg};
          `}
      }
    }
    .signup_link {
      color: ${light_theme.op_body_bg};
      font-size: 0.92rem;
      margin-top: 7px;
      a {
        color: ${defaults.primary_color};
        font-size: 114%;
        text-transform: capitalize;
      }
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          color: ${dark_theme.op_body_bg};
        `}
    }
  }
`;
