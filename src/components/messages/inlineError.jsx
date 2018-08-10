import React from 'react';
import propTypes from 'prop-types';

const inlineError = ({ text }) => (
  <span style={{ color: 'red' }}>
    { text }
  </span>
);

inlineError.propTypes = {
  text: propTypes.string.isRequired,
};

export default inlineError;
