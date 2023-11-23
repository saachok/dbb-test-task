import { useState } from 'react';

import { uploadFile } from '../../../functions/dropboxFuncs';

import styles from './UploadButton.module.scss';

const UploadButton = ({ path }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleUpload = async e => {
    e.preventDefault();
    if (file) {
      try {
        await uploadFile(file, path);
        alert('File successfully uploaded!');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <input type="file" onChange={handleFileChange} />
        {file && (
          <section className={styles.section}>
            <ul className={styles.list}>
              <li className={styles['list-item']}>Title: {file.name}</li>
              <li className={styles['list-item']}>Type: {file.type}</li>
            </ul>
          </section>
        )}
      </div>
      {file && (
        <button onClick={handleUpload} className={styles['upload-btn']}>
          Upload
        </button>
      )}
    </form>
  );
};

export default UploadButton;
