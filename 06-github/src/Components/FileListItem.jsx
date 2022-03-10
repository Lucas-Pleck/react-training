import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ name, type, update, message }) => (
  <div className="grid grid-cols-3 w-full">
    <FileName type={type} name={name} />
    <CommitMessage message={message} />
    <Time update={update} />
  </div>
);

export default FileListItem;
