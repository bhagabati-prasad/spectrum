import styled from 'styled-components';
import { light_theme, media } from './_variables';
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
  color: #999;
  line-height: 1.6;
  letter-spacing: 0.4px;
  @media ${media.md} {
    line-height: 1.4;
  }
`;

export const ThemeSettings = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  div {
    height: 2.9rem;
    width: 2.9rem;
    display: grid;
    place-items: center;
    margin: 0.7rem 0;
    &.editInfo a,
    &.toggleTheme button {
      height: 100%;
      width: 100%;
      display: grid;
      place-items: center;
      outline: none;
      border: none;
      color: #fff;
      text-decoration: none;
      background-color: #222;
      border-radius: 4px;
      border: 2px solid #999;
    }
  }
`;

export const Header = styled.header`
  padding: 1.3rem 0;
  background: ${(props) => (props.bg === 'true' ? 'transparent' : '#000')};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: all 1s ease;
  nav {
    a.logo {
      text-decoration: none;
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    ul li {
      margin: 0 0.7rem;
      a {
        text-decoration: none;
        display: flex;
        color: #fff;
      }
    }
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
  @media ${media.md} {
    margin-bottom: 5rem;
  }
  @media ${media.sm} {
    margin-bottom: 3rem;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000 40%, rgba(0, 0, 0, 0.4) 40%);
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
        color: ${light_theme.portfolio_op_body_bg_darker};
        font-size: 0.9rem;
        letter-spacing: 0.4rem;
      }
      h1.name {
        color: ${light_theme.portfolio_op_body_bg};
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
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
        background-color: ${light_theme.portfolio_op_body_bg_darker};
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
            color: ${light_theme.portfolio_primary_color};
            margin-left: 0.4rem;
          }
        }
      }
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
        background-color: #000;
        border-radius: 50%;
        margin-right: 0.7rem;
        transition: all 0.34s;
        &:hover {
          background-color: #222;
          transform: translateY(-4px);
        }
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
    a {
      text-decoration: none;
      display: flex;
      font-size: 0.8rem;
      letter-spacing: 1px;
      color: ${light_theme.portfolio_op_body_bg};
      background-color: #222;
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
        color: ${light_theme.portfolio_op_body_bg_darker};
        letter-spacing: 0.4px;
        margin: 0 4px;
        &.key {
          opacity: 0.9;
          white-space: nowrap;
        }
      }
    }
  }
`;

export const ResumeSection = styled(PaddedSection)`
  .education {
    h2 {
      color: #fff;
      margin-bottom: 1.7rem;
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
        color: #fff;
        border: 1px solid transparent;
        border-top-color: #fff;
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
          background-color: #fff;
        }
        @media ${media.sm} {
          flex: 100%;
          max-width: 100%;
          padding-left: 2rem;
          margin-left: 1rem;
          border-top-color: transparent;
          border-left-color: #fff;
          &::before {
            transform: translate(-50%, 0);
          }
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
      color: #fff;
      margin-bottom: 1.7rem;
    }
  }
`;

export const ProjectSection = styled(PaddedSection)`
  .single_project {
    max-height: 450px;
    background-color: #000;
    position: relative;
    .image {
      height: 350px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        opacity: 0.8;
      }
    }
    .body {
      width: 90%;
      position: absolute;
      bottom: -30%;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      text-decoration: none !important;
      padding: 1rem;
      @media ${media.md} {
        bottom: 0;
      }
      @media ${media.sm} {
        bottom: 1rem;
      }
      h1 {
        font-size: 2.6rem;
        @media ${media.md} {
          font-size: 2.2rem;
        }
      }
      h3 {
        font-size: 1.34rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 0.9rem;
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
    background-color: #fff;
    padding: 2rem 0;
    border-radius: 4px;
    transform: translateY(4.8rem);
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
          border-bottom: 1px solid #777;
          margin: 1rem 0;
        }
        textarea {
          min-height: 100px;
          max-height: 130px;
          border: 1px solid #777;
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
      font-weight: bold;
      text-transform: uppercase;
      font-family: 'Poppins', sans-serif;
      -webkit-text-stroke: 1px #fff;
      letter-spacing: 2px;
      margin-bottom: 1.6rem;
    }
    h4 {
      color: #fff;
      font-size: 0.8rem;
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
      margin-bottom: 1.4rem;
    }
    p {
      color: #ccc;
      font-size: 0.9rem;
      letter-spacing: 0.4px;
      margin: 0.8rem 0;
    }
    .soc_icon {
      a {
        text-decoration: none;
        display: flex;
        color: #fff;
        font-size: 1.2rem;
        margin-right: 1.7rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
