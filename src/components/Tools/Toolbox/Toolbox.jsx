import CreateFolderButton from '../CreateFolderButton/CreateFolderButton';
import UploadButton from '../UploadButton/UploadButton';

import styles from './Toolbox.module.scss';

const Toolbox = ({ path }) => {
  return (
    <div className={styles.toolbox}>
      <UploadButton path={path} />
      <CreateFolderButton />
    </div>
  );
};

export default Toolbox;
