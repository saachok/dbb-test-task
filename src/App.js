import { useState, useEffect } from 'react';
import './App.css';

import { getListFolders, getThumbnails } from './functions/dropboxFuncs';
import ItemsList from './components/ItemsList/ItemsList';
import PathForm from './components/PathForm/PathForm';

const ROOT_PATH = '/Server app';

function App() {
  const [items, setItems] = useState([]);
  const [location, setLocation] = useState({
    rootPath: ROOT_PATH,
    cursor: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log('location.rootPath', location.rootPath);
      const res = await getListFolders(location.rootPath);
      setItems(res.entries);
      getThumbnails(res.entries);
    };

    fetchData();
  }, [location.rootPath]);

  const handleFormSubmit = path => {
    setLocation(prevState => ({ ...prevState, rootPath: path }));
  };

  return (
    <>
      <PathForm onSubmit={handleFormSubmit} path={location.rootPath} />
      <ItemsList items={items} />
    </>
  );
}

export default App;
