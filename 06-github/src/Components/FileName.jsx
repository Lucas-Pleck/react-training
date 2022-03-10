import React from 'react';
import FileIcon from './FileIcon';

const FileName = ({ type, name }) => (
  <div className="flex py-2 mx-4 mb-4 border-b">
    <FileIcon type={type} />
    {name}
  </div>
);

export default FileName;
