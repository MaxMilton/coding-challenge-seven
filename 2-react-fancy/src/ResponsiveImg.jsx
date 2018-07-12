// Changes image based on display pixel density

import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveImg = ({
  className,
  imgX1,
  imgX2,
  altText,
}) => (
  <picture>
    <img
      className={className}
      srcSet={`
        ${imgX1},
        ${imgX2} 2x
      `}
      src={imgX2}
      alt={altText}
    />
  </picture>
);

ResponsiveImg.propTypes = {
  className: PropTypes.string,
  imgX1: PropTypes.string.isRequired,
  imgX2: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

ResponsiveImg.defaultProps = {
  className: '',
};

export default ResponsiveImg;
