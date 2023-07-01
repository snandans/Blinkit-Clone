import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ styles, src, alt }) => {
  return (
    <div>
      <img className = {styles} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
   styles: PropTypes.objectOf(PropTypes.string),
   src: PropTypes.objectOf(PropTypes.node).isRequired,
   alt: PropTypes.objectOf(PropTypes.string)
}

export default Image;
