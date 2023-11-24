import { useContext } from 'react';
import { LocationContext } from '../../../../context/LocationContext';

import { createDropboxFolder } from '../../../../functions/dropboxFuncs';
import styles from './CreateFolderButton.module.scss';

const CreateFolderButton = ({ path }) => {
  const { updateFolders } = useContext(LocationContext);

  const handeCreateFolder = async () => {
    const folderName = prompt('Please enter folder name:');
    const folderPath = path + '/' + folderName;
    try {
      await createDropboxFolder(folderPath);
      updateFolders();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <span className={styles['create-btn']} onClick={handeCreateFolder}>
      <span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12 7H19C20.1046 7 21 7.89543 21 9V11"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18 14V17M18 20V17M18 17H15M18 17H21"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </span>
      <span className={styles.text}>Create folder</span>
    </span>
  );
};

export default CreateFolderButton;
