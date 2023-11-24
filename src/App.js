import { useState, useEffect } from 'react';
import { getListFolders, getThumbnails } from './functions/dropboxFuncs';
import ItemsList from './components/ItemsList/ItemsList';
import PathForm from './components/PathForm/PathForm';
import Toolbox from './components/Tools/Toolbox/Toolbox';

import styles from './App.module.scss';
import { addFileType } from './functions/utils';
import { ROOT_PATH } from './constant';
import { LocationContext } from './context/LocationContext';

function App() {
  const [items, setItems] = useState([]);
  const [location, setLocation] = useState(ROOT_PATH);

  const fetchData = async () => {
    try {
      console.log('location', location);
      const res = await getListFolders(location);

      const fetchedItems = res.entries.map(addFileType);

      setItems(fetchedItems);
      getThumbnails(fetchedItems);
    } catch (error) {
      if (error.status === 401) {
        alert('Please log in.');
      } else alert(`Can't find entered directory.`);

      if (location.toLocaleLowerCase() === ROOT_PATH) return;
      let lastIndex = location.lastIndexOf('/');
      let newPath = location.substring(0, lastIndex);
      setLocation(newPath);

      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  const handleFormSubmit = path => {
    setLocation(path);
  };

  return (
    <LocationContext.Provider value={{ updateFolders: fetchData }}>
      <div className={styles.toolkit}>
        <PathForm onSubmit={handleFormSubmit} path={location} />
        <Toolbox path={location} />
      </div>
      <ItemsList items={items} setLocation={path => setLocation(path)} />
    </LocationContext.Provider>
  );
}

export default App;
