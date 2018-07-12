import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TileImage = styled.img`
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const NetworkLogo = styled.img`
  width: auto;
  height: 4.6rem;
`;

const Title = styled.h3`
  margin: 0 0 0 1rem;
  color: rgb(255, 255, 255);
  font-family: sans-serif;
  font-size: 2.2rem;
`;

/**
 * @typedef {object} BannerProps
 * @property {string} className CSS class name.
 * @property {string} tile Background image.
 * @property {string} title Banner title (also used for tile image alt text).
 * @property {string} [logo] Network logo image.
 * @property {string} [logoAlt] Network logo image alt text.
 */

/**
 * Banner component.
 * @param {BannerProps} props
 */
const Banner = ({
  className,
  tile,
  title,
  logo,
  logoAlt,
}) => (
  <Wrapper className={className}>
    <TileImage src={tile} alt={title} />

    <Overlay>
      <NetworkLogo src={logo} alt={logoAlt} />

      <Title>
        {title}
      </Title>
    </Overlay>
  </Wrapper>
);

Banner.propTypes = {
  tile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
};

Banner.defaultProps = {
  className: '',
  logo: '../logo.png',
  logoAlt: '7plus',
};

export default Banner;
