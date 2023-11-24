import Folder from './Folder/Folder';
import File from './File/File';

const Item = ({ file }) => {
  switch (file.type) {
    case 'folder':
      return <Folder file={file} />;
    case 'file':
      return <File file={file} />;
    default:
      return null;
  }
};

export default Item;
