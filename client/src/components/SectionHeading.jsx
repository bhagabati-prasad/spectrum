import styled from 'styled-components';
import { light_theme, media } from '../styles/_variables';

const HeadingDiv = styled.h1`
  color: ${light_theme.portfolio_op_body_bg};
  font-size: 5.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 4rem;
  @media ${media.md} {
    font-size: 3.4rem;
    letter-spacing: 1px;
    margin-bottom: 3rem;
  }
  @media ${media.sm} {
    font-size: 2.8rem;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
  }
  &::first-letter {
    text-transform: capitalize;
  }
  span {
    color: transparent;
    --webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px ${light_theme.portfolio_op_body_bg};
  }
`;

const SectionHeading = ({ fill = '', span = '' }) => {
  return (
    <div>
      <HeadingDiv>
        {fill}
        <span>{span}</span>
      </HeadingDiv>
    </div>
  );
};

export default SectionHeading;
