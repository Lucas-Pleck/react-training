import React from 'react';
import SelectBox from './SelectBox';

const Toolbar = () => (
  <div className="flex items-center justify-around w-full py-3">
    <button
      type="button"
      className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-300">
      Zoomer
    </button>
    <button
      type="button"
      className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-300">
      Dezoomer
    </button>
    <SelectBox />
  </div>
);

export default Toolbar;
