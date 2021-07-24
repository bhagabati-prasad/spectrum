import styled, { css } from 'styled-components';
import { dark_theme, light_theme, media } from '../styles/_variables';

const HeadingDiv = styled.h1`
  font-size: 5.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  position: relative;
  .heading_line {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 4rem;
  }
  &::first-letter {
    text-transform: capitalize;
  }
  span {
    color: transparent;
    --webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px ${light_theme.portfolio_op_body_bg};
  }
  @media ${media.md} {
    font-size: 3.4rem;
    letter-spacing: 1px;
    margin-bottom: 3rem;
  }
  @media ${media.sm} {
    font-size: 2.8rem;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
    span {
      display: block;
    }
  }
`;

const SectionHeading = ({ darkMode, fill = '', span = '' }) => {
  return (
    <div>
      <HeadingDiv
        style={
          darkMode === 'light'
            ? { color: `${light_theme.portfolio_op_body_bg}` }
            : { color: `${dark_theme.portfolio_op_body_bg}` }
        }
      >
        {fill}
        <div
          className='heading_line'
          style={
            darkMode === 'light'
              ? { background: `${light_theme.portfolio_op_body_bg}` }
              : { background: `${dark_theme.portfolio_op_body_bg}` }
          }
        ></div>
        <span
          style={
            darkMode === 'light'
              ? { WebkitTextStroke: `1px ${light_theme.portfolio_op_body_bg}` }
              : { WebkitTextStroke: `1px ${dark_theme.portfolio_op_body_bg}` }
          }
        >
          {span}
        </span>
      </HeadingDiv>
    </div>
  );
};

export default SectionHeading;
