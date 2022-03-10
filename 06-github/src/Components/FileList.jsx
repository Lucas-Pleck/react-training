import React from 'react';
import FileListItem from './FileListItem';
import files from '../data/files';

const FileList = () => (
  <>
    {files.map((u) => (
      <FileListItem
        key={u.id}
        name={u.name}
        type={u.type}
        update={u.update_at}
        message={u.latestCommit.message}
      />
    ))}
  </>
);

export default FileList;
