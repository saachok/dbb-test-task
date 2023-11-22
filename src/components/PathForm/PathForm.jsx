import { useState } from 'react';

const PathForm = ({ onSubmit, path }) => {
  const [inputPath, setInputPath] = useState('');

  const handleInputChange = e => {
    setInputPath(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(`${path}/${inputPath.toLocaleLowerCase()}`);
    setInputPath('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Go to..."
        value={inputPath}
        onChange={handleInputChange}
      />
      <button type="submit">Submit!</button>
    </form>
  );
};

export default PathForm;
