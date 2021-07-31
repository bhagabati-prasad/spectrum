import styled, { css } from 'styled-components';
import { dark_theme, defaults, light_theme, media } from './_variables';

export const SignupSection = styled.section`
  min-height: auto;
  position: relative;
  overflow: hidden;
`;

export const FormSection = styled.div`
  min-height: 100vh;
  padding: 5.4rem 0;
  width: 100%;
  display: grid;
  place-items: center;
  @media ${media.sm} {
    padding: 3.4rem 0;
  }
  .form_container {
    padding: 1.7rem 1.2rem;
    width: 35.4rem;
    max-width: 95vw;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 7px;
    backdrop-filter: blur(5px);
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        background: rgba(0, 0, 0, 0.4);
      `}
    @include sm {
      width: 84%;
    }
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
      .form_box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.5rem;
        label {
          color: ${light_theme.op_body_bg};
          font-size: 0.92rem;
          padding: 4px 0;
          cursor: pointer;
          ${({ darkMode }) =>
            darkMode === 'dark' &&
            css`
              color: ${dark_theme.op_body_bg};
            `}
        }
        input:not(.form-check-input),
        select {
          width: 100%;
          font-size: 0.8rem;
          outline: none;
          color: ${light_theme.op_body_bg};
          letter-spacing: 0.5px;
          border: none;
          border-bottom: 2px solid #888;
          background: transparent;
          transition: all 0.28s;
          option {
            color: ${light_theme.op_body_bg};
            background: ${light_theme.body_bg};
            font-size: 1rem;
          }
          &:hover {
            border-color: ${light_theme.op_body_bg};
          }
          &:focus {
            border-color: ${defaults.primary_color};
          }
          ${({ darkMode }) =>
            darkMode === 'dark' &&
            css`
              color: ${dark_theme.op_body_bg};
              &:hover {
                border-color: ${dark_theme.op_body_bg};
              }
            `}
        }
        .radio_box {
          input {
            margin-right: 4px;
          }
        }
        button {
          width: 96%;
          color: ${defaults.op_primary_color};
          letter-spacing: 1px;
          text-transform: capitalize;
          font-size: 1.1rem;
          font-family: 'Roboto', sans-serif;
          background: ${defaults.primary_color};
          border: none;
          outline: none;
          padding: 0.3rem 0.9rem;
          border-radius: 3rem;
          margin: 0.7rem 0;
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
    }
    .login_link {
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
