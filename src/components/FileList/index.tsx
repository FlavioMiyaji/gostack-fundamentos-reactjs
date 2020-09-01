import React from 'react';

import { Container, FileInfo } from './styles';

interface FileProps {
  name: string;
  readableSize: string;
}

interface FileListProps {
  files: FileProps[];
}

const FileList: React.FC<FileListProps> = ({ files }: FileListProps) => {
  return (
    <Container>
      {files.map(({ name, readableSize }) => (
        <li key={name}>
          <FileInfo>
            <div>
              <strong>{name}</strong>
              <span>{readableSize}</span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
