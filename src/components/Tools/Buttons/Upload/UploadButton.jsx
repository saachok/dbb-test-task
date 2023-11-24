import { useRef, useState } from 'react';

import { uploadFile } from '../../../../functions/dropboxFuncs';

import styles from './UploadButton.module.scss';

const UploadButton = ({ path }) => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = e => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        await uploadFile(file, path);
        alert('File successfully uploaded!');
        setFile(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleButtonClick = () => {
    if (file) {
      handleUpload();
    } else {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
        id="my-file"
        ref={inputRef}
      />
      <span className={styles['upload-btn']} onClick={handleButtonClick}>
        {file ? (
          <>
            <span className={styles.text}>File selected.</span>
            <span className={styles.text}>Send</span>
          </>
        ) : (
          <>
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
                    d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
            <span role="button" className={styles.text}>
              Upload
            </span>
          </>
        )}
      </span>
    </>
  );
};

export default UploadButton;
