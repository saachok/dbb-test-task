import styles from './Folder.module.scss';
import { LocationContext } from '../../../context/LocationContext';

import { FOLDER_BASE_64_ICON } from '../../../constant';
import { useContext } from 'react';

const Folder = ({ file }) => {
  const { setLocation } = useContext(LocationContext);
  const { path_lower: path } = file;

  const handleLocationChange = () => {
    setLocation(path);
  };

  return (
    <li className={styles['list-item']}>
      <div className={styles['info-area']} onClick={handleLocationChange}>
        <img alt="Thumbnail" src={FOLDER_BASE_64_ICON} />
        {file.name}
      </div>
    </li>
  );
};

export default Folder;
