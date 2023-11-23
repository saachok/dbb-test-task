import { getSharedLink } from '../../functions/dropboxFuncs';
import Folder from '../Item/Folder/Folder';
import File from '../Item/File/File';
import styles from './ItemsList.module.scss';
import { Fragment } from 'react';
import { sortByType } from '../../functions/utils';

const ItemsList = ({ items, setLocation }) => {
  const handleLocationChange = path => {
    setLocation(path);
  };

  const hadnleOpenFile = async path => {
    const response = await getSharedLink(path);
    const { sharedLink } = response;
    window.open(sharedLink, '_blank');
  };

  return (
    <ul className={styles.list}>
      {items?.sort(sortByType).map(file => (
        //FIXME: Render <Item /> instead of <File /> & <Folder />
        <Fragment key={file.id}>
          {file.type === 'file' ? (
            <File file={file} onClick={hadnleOpenFile} />
          ) : (
            <Folder file={file} onClick={handleLocationChange} />
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default ItemsList;
