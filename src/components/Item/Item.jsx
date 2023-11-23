import Folder from './Folder/Folder';
import File from './File/File';

const Item = ({ file }) => {
  //FIXME: Add props to child components
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
