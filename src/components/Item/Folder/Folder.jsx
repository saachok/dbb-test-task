import styles from './Folder.module.scss';

import { FOLDER_BASE_64_ICON } from '../../../constant';

const Folder = ({ file, onClick }) => {
  const { path_lower: path } = file;

  const handleClick = () => {
    onClick(path);
  };

  return (
    <li className={styles['list-item']}>
      <div className={styles['info-area']} onClick={handleClick}>
        <img alt="Thumbnail" src={FOLDER_BASE_64_ICON} />
        {file.name}
      </div>
    </li>
  );
};

export default Folder;
