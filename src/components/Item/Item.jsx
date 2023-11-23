import {
  downloadFile,
  getSharedLink,
  getSharedLinkFile,
} from '../../functions/dropboxFuncs';

import styles from './Item.module.scss';

const Item = ({ file, thumbnail, setLocation }) => {
  const handleClick = () => {
    setLocation(file.path_lower);
  };

  const handleDownload = async () => {
    // const response = await downloadFile(file.path_lower);

    const response = await getSharedLink(file.path_lower);
    getSharedLinkFile(response.sharedLink);
  };

  return (
    <li className={styles['list-item']}>
      <div className={styles['info-area']} onClick={handleClick}>
        <img alt="Thumbnail" src={thumbnail} />
        {file.name}
      </div>
      {file['.tag'] !== 'folder' && (
        <button className={styles['download-btn']} onClick={handleDownload}>
          Download
        </button>
      )}
    </li>
  );
};

export default Item;
