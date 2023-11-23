import Folder from './Folder/Folder';
import File from './File/File';

const Item = ({ file }) => {
  switch (file.type) {
    case 'folder':
      return <Folder />;
    case 'file':
      return <File />;
    default:
      return null;
  }
};

export default Item;
