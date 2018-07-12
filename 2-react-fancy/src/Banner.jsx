import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResponsiveImg from './ResponsiveImg';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TileImage = styled(ResponsiveImg)`
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NetworkLogo = styled(ResponsiveImg)`
  width: auto;
  height: 4.6rem;
`;

export const Title = styled.h3`
  margin: 0 0 0 1rem;
  color: rgb(255, 255, 255);
  font-family: sans-serif;
  font-size: 2.2rem;
`;

const Banner = ({
  className,
  tileX1,
  tileX2,
  title,
  logoX1,
  logoX2,
  logoAlt,
}) => (
  <Wrapper className={className}>
    <TileImage imgX1={tileX1} imgX2={tileX2} altText={title} />

    <Overlay>
      <NetworkLogo imgX1={logoX1} imgX2={logoX2} altText={logoAlt} />

      <Title>
        {title}
      </Title>
    </Overlay>
  </Wrapper>
);

Banner.propTypes = {
  tileX1: PropTypes.string.isRequired,
  tileX2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  logoX1: PropTypes.string,
  logoX2: PropTypes.string,
  logoAlt: PropTypes.string,
};

Banner.defaultProps = {
  className: '',
  logoX1: '../logo.png',
  logoX2: '../logo@x2.png',
  logoAlt: '7plus',
};

export default Banner;
