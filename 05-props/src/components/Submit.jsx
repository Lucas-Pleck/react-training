import React from 'react';

const Submit = ({ actionOnClick }) => (
  <button
    type="button"
    className="px-3 bg-blue-500 rounded text-white"
    onClick={actionOnClick}>
    Click Me
  </button>
);

export default Submit;
