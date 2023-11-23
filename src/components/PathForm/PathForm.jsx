import { useState } from 'react';
import styles from './PathForm.module.scss';

const PathForm = ({ onSubmit, path }) => {
  const [inputPath, setInputPath] = useState('');

  const handleInputChange = e => {
    setInputPath(e.target.value);
  };

  const handleGoBack = () => {
    if (path.toLocaleLowerCase() === '/server app') return;
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
        />
        <button type="submit">Submit!</button>
      </form>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PathForm;