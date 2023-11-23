import { useState } from 'react';
import styles from './PathForm.module.scss';
import { ROOT_PATH } from '../../constant';

const PathForm = ({ onSubmit, path }) => {
  const [inputPath, setInputPath] = useState('');

  const handleInputChange = e => {
    setInputPath(e.target.value);
  };

  const handleGoBack = () => {
    //FIXME: Update security
    if (path.toLocaleLowerCase() === ROOT_PATH) return;
    let lastIndex = path.lastIndexOf('/');
    let newPath = path.substring(0, lastIndex);
    onSubmit(newPath);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputPath) return;
    const newPath = `${path}/${inputPath.toLocaleLowerCase()}`.trim();
    onSubmit(newPath);
    setInputPath('');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Go to..."
          value={inputPath}
          onChange={handleInputChange}
          className={styles['input']}
        />
        <button className={styles['nav-btn']} type="submit">
          Go to!
        </button>
      </form>
      <button className={styles['nav-btn']} onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default PathForm;
