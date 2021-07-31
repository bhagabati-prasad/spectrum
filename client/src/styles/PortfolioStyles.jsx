import styled, { css } from 'styled-components';
import { dark_theme, defaults, light_theme, media } from './_variables';
import BackgroundSlider from 'react-background-slider';

export const PaddedSection = styled.section`
  padding: 9rem 0;
  @media ${media.md} {
    padding: 4rem 0;
  }
  @media ${media.sm} {
    padding: 3rem 0;
  }
`;

export const Description = styled.p`
  color: ${light_theme.portfolio_op_body_bg};
  line-height: 1.6;
  letter-spacing: 0.4px;
  @media ${media.md} {
    line-height: 1.4;
  }
`;

export const Header = styled.header`
  padding: 1.3rem 0;
  background: ${(props) =>
    props.bg === 'true'
      ? 'transparent'
      : `${
          props.darkMode === 'light'
            ? light_theme.portfolio_body_bg
            : dark_theme.portfolio_body_bg
        }`};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all 1s ease;
  nav {
    a.logo {
      text-decoration: none;
      color: ${light_theme.portfolio_op_body_bg};
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    ul li {
      margin: 0 0.7rem;
      a {
        text-decoration: none;
        display: flex;
        color: ${light_theme.portfolio_op_body_bg};
        ${({ bg }) =>
          bg === 'true' &&
          css`
            color: ${light_theme.portfolio_body_bg};
          `}
      }
    }
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        a.logo,
        ul li a {
          color: ${dark_theme.portfolio_op_body_bg};
        }
      `}
  }
  .toggle {
    color: ${light_theme.portfolio_op_body_bg};
    font-size: 1.4rem;
    padding: 4px;
    z-index: 99;
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        color: ${dark_theme.portfolio_op_body_bg};
      `}
    ${({ bg }) =>
      bg === 'true' &&
      css`
        color: ${light_theme.portfolio_body_bg};
      `}
    ${({ mobnav }) =>
      mobnav === 'show' &&
      css`
        color: ${light_theme.portfolio_op_body_bg};
      `}
  }
  /* mobile nav section */
  & + section.mobile_nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 100%;
    background-color: ${light_theme.portfolio_body_bg};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    transition: all 0.47s ease;
    ${({ mobnav }) =>
      mobnav === 'show' &&
      css`
        background-color: ${light_theme.portfolio_body_bg};
        left: 0;
        visibility: visible;
        opacity: 1;
      `}
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style-type: none;
        a {
          text-decoration: none;
          display: flex;
          color: ${light_theme.portfolio_op_body_bg};
          font-size: 1.3rem;
          text-transform: uppercase;
          padding: 4px 0;
          margin: 0.7rem 0;
        }
      }
    }
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        background-color: ${dark_theme.portfolio_body_bg};
        ul li a {
          color: ${dark_theme.portfolio_op_body_bg};
        }
      `}
  }
`;

export const HeroBgSlider = styled(BackgroundSlider)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 5rem 0 2rem 0;
  margin-bottom: 7rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      ${light_theme.portfolio_body_bg} 40%,
      rgba(0, 0, 0, 0.44) 40%
    );
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        background: linear-gradient(
          to right,
          ${dark_theme.portfolio_body_bg} 40%,
          rgba(0, 0, 0, 0.44) 40%
        );
      `}
  }
  @media ${media.md} {
    margin-bottom: 5rem;
  }
  @media ${media.sm} {
    margin-bottom: 3rem;
  }
  .content {
    width: 30rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    .title {
      h4 {
        color: ${light_theme.portfolio_op_body_bg};
        font-size: 0.9rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        letter-spacing: 0.4rem;
      }
      h1.name {
        color: ${light_theme.portfolio_op_body_bg};
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        -webkit-text-stroke: 0.7px ${light_theme.portfolio_body_bg};
        letter-spacing: 1px;
        text-transform: capitalize;
        margin-bottom: 4.4rem;
        @media ${media.sm} {
          font-size: 2.4rem;
        }
      }
      div.line {
        height: 2px;
        width: 2rem;
        background-color: ${light_theme.portfolio_op_body_bg};
      }
      .domain {
        h3 {
          color: ${light_theme.portfolio_op_body_bg};
          font-size: 1.3rem;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 1px;
          text-transform: capitalize;
          display: flex;
          padding: 2rem 0;
          span {
            color: ${defaults.primary_color};
            margin-left: 0.4rem;
          }
        }
      }
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          h4,
          h1.name,
          .domain h3 {
            color: ${dark_theme.portfolio_op_body_bg};
          }
          h1.name {
            -webkit-text-stroke: 0.7px ${dark_theme.portfolio_body_bg};
          }
          div.line {
            background-color: ${dark_theme.portfolio_op_body_bg};
          }
        `}
    }
    .soc_icon {
      display: flex;
      margin-top: 4.4rem;
      a {
        text-decoration: none;
        display: grid;
        place-items: center;
        font-size: 0.8rem;
        color: ${light_theme.portfolio_op_body_bg};
        height: 2.6rem;
        width: 2.6rem;
        background-color: ${light_theme.portfolio_body_bg};
        border-radius: 50%;
        margin-right: 0.7rem;
        transition: all 0.34s;
        &:hover {
          background-color: ${light_theme.portfolio_op_body_bg_darker};
          transform: translateY(-4px);
        }
        ${({ darkMode }) =>
          darkMode === 'dark' &&
          css`
            color: ${dark_theme.portfolio_op_body_bg};
            background-color: ${dark_theme.portfolio_body_bg};
            &:hover {
              background-color: ${dark_theme.portfolio_op_body_bg_darker};
            }
          `}
      }
    }
  }
`;

export const AboutSection = styled(PaddedSection)`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${Description} {
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          color: ${dark_theme.portfolio_op_body_bg};
        `}
    }
    a {
      text-decoration: none;
      display: flex;
      font-size: 0.8rem;
      letter-spacing: 1px;
      color: ${light_theme.portfolio_body_bg};
      background-color: ${light_theme.portfolio_op_body_bg};
      padding: 0.7rem 2.4rem;
      border: 2px solid ${light_theme.portfolio_body_bg};
      border-radius: 2.5rem;
      margin: 1.5rem 0;
      transition: all 0.34s ease;
      &:hover {
        background-color: #111;
        border-color: ${light_theme.portfolio_op_body_bg_darker};
      }
    }
  }
`;

export const DetailsSection = styled(PaddedSection)`
  padding: 2rem 0;
  ul {
    float: left;
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 1rem;
      display: flex;
      max-width: 50%;
      flex: 50%;
      padding: 1rem 0;
      @media ${media.sm} {
        flex: 100%;
        max-width: 100%;
      }
      span {
        color: ${light_theme.portfolio_op_body_bg};
        letter-spacing: 0.4px;
        margin: 0 4px;
        &.key {
          opacity: 0.9;
          white-space: nowrap;
        }
        ${({ darkMode }) =>
          darkMode === 'dark' &&
          css`
            color: ${dark_theme.portfolio_op_body_bg};
          `}
      }
    }
  }
`;

export const ResumeSection = styled(PaddedSection)`
  .education {
    h2 {
      color: ${light_theme.portfolio_op_body_bg};
      margin-bottom: 1.7rem;
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          color: ${dark_theme.portfolio_op_body_bg};
        `}
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      li {
        list-style-type: none;
        flex: calc(100% / 3);
        max-width: calc(100% / 3);
        padding: 1rem 0.5rem;
        color: ${light_theme.portfolio_op_body_bg};
        border: 1px solid transparent;
        border-top-color: ${light_theme.portfolio_op_body_bg};
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(-50%);
          height: 0.571rem;
          width: 0.57rem;
          border-radius: 50%;
          background-color: ${light_theme.portfolio_op_body_bg};
        }
        ${({ darkMode }) =>
          darkMode === 'dark' &&
          css`
            color: ${dark_theme.portfolio_op_body_bg};
            border-top-color: ${dark_theme.portfolio_op_body_bg};
            &::before {
              background-color: ${dark_theme.portfolio_op_body_bg};
            }
          `}
        @media ${media.sm} {
          flex: 100%;
          max-width: 100%;
          padding-left: 2rem;
          margin-left: 1rem;
          border-top-color: transparent;
          border-left-color: ${light_theme.portfolio_op_body_bg};
          &::before {
            transform: translate(-50%, 0);
          }
          ${({ darkMode }) =>
            darkMode === 'dark' &&
            css`
              border-left-color: ${dark_theme.portfolio_op_body_bg};
            `}
        }
        p {
          line-height: 1.6;
          letter-spacing: 0.5px;
          margin: 0;
          &.duration {
            opacity: 0.8;
            font-size: 0.9rem;
          }
          &.clg {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .skills {
    h2 {
      color: ${light_theme.portfolio_op_body_bg};
      margin-bottom: 1.7rem;
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          color: ${dark_theme.portfolio_op_body_bg};
        `}
    }
    .skill_wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    .skill_block {
      display: inline-block;
      padding: 0.3rem 0.7rem;
      margin: 2px 4px;
      border-radius: 4px;
      text-transform: capitalize;
      color: #fff;
      background: #5f5f5e;
    }
  }
`;

export const ProjectSection = styled(PaddedSection)`
  position: relative;
  .single_project {
    background-color: ${light_theme.portfolio_body_bg};
    position: relative;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        background-color: ${dark_theme.portfolio_body_bg};
      `}
    .image {
      min-height: 12rem;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        opacity: 0.8;
      }
    }
    .body {
      width: 90%;
      transform: translateY(-2rem);
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      position: relative;
      padding: 1rem;
      margin: 0 auto;
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          background-color: rgba(0, 0, 0, 0.4);
        `}
      h1 {
        font-size: 2.6rem;
        @media ${media.md} {
          font-size: 2.2rem;
        }
      }
      h3 {
        font-size: 1.24rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        color: #ccc;
        font-size: 0.94rem;
        line-height: 1.6;
        margin: 0;
      }
      a {
        text-decoration: none;
        display: inline-block;
        padding: 0.4rem 0.7rem;
        margin-top: 0.7rem;
        text-transform: capitalize;
        color: #111;
        background-color: #fff;
        border-radius: 2px;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 1rem;
        height: 100%;
        width: 2rem;
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
      }
    }
  }
  .owl-nav {
    margin: 1rem 0;
    button {
      background: #fff !important;
      span {
        font-size: 1.4rem;
        color: #fff !important;
        background: #000 !important;
        padding: 0.4rem 0.8rem !important;
        margin: 1rem;
      }
      ${({ darkMode }) =>
        darkMode === 'dark' &&
        css`
          background: #000 !important;
          span {
            color: #000 !important;
            background-color: #fff !important;
          }
        `}
    }
  }
`;

export const ContactSection = styled.section`
  background: url('../images/mapbg.png') no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0;
  @media ${media.md} {
    padding: 5rem 0;
  }
  @media ${media.sm} {
    padding: 3rem 0;
  }
  .content_box {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .form_box {
    background-color: #f1f1f4;
    padding: 2rem 0;
    border-radius: 4px;
    transform: translateY(4.8rem);
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        background-color: #fff;
      `}
    @media ${media.md} {
      transform: translateY(0);
    }
    p {
      font-size: 0.74rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0 2rem;
    }
    form {
      .input_fields {
        padding: 0 2rem;
        input,
        textarea {
          width: 100%;
          outline: none;
          border: none;
          background: transparent;
          border-bottom: 1px solid #666;
          margin: 1rem 0;
        }
        textarea {
          min-height: 100px;
          max-height: 130px;
          border: 1px solid #666;
        }
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0 2rem 2rem;
        button {
          background-color: #111;
          color: #fff;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.8rem 1.2rem;
          outline: none;
          border: none;
          border-bottom: none;
          white-space: nowrap;
          border-radius: 4px 0 0 4px;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 0;
  .single_box {
    margin: 1rem 0;
    .logo {
      color: #000;
      font-size: 1.8rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family: 'Poppins', sans-serif;
      -webkit-text-stroke: 1px #fff;
      letter-spacing: 0.5px;
      margin-bottom: 1.6rem;
    }
    h4 {
      color: ${light_theme.portfolio_op_body_bg};
      font-size: 0.8rem;
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
      margin-bottom: 1.4rem;
    }
    p {
      color: ${light_theme.portfolio_op_body_bg};
      font-size: 0.9rem;
      letter-spacing: 0.4px;
      margin: 0.8rem 0;
    }
    .soc_icon {
      a {
        text-decoration: none;
        display: flex;
        color: ${light_theme.portfolio_op_body_bg};
        font-size: 1.2rem;
        margin-right: 1.7rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    ${({ darkMode }) =>
      darkMode === 'dark' &&
      css`
        h4,
        p,
        .soc_icon a {
          color: ${dark_theme.portfolio_op_body_bg};
        }
      `}
  }
`;
