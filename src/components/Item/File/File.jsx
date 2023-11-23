import {
  getSharedLink,
  getSharedLinkFile,
} from '../../../functions/dropboxFuncs';
import styles from './File.module.scss';

import { FILE_BASE_64_ICON } from '../../../constant';

const File = ({ file, onClick }) => {
  const { path_lower: path } = file;

  const handleClick = () => {
    onClick(path);
  };

  const handleDownload = async () => {
    const response = await getSharedLink(file.path_lower);
    const { sharedLink } = response;
    getSharedLinkFile(sharedLink);
  };

  return (
    <li className={styles['list-item']}>
      <div className={styles['info-area']} onClick={handleClick}>
        <img alt="Thumbnail" src={FILE_BASE_64_ICON} />
        {file.name}
      </div>
      <button className={styles['download-btn']} onClick={handleDownload}>
        Download
      </button>
    </li>
  );
};

export default File;
