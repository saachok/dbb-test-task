import CreateFolderButton from '../CreateFolderButton/CreateFolderButton';
import UploadButton from '../UploadButton/UploadButton';

import styles from './Toolbox.module.scss';

const Toolbox = () => {
  return (
    <div className={styles.toolbox}>
      <UploadButton />
      <CreateFolderButton />
    </div>
  );
};

export default Toolbox;
