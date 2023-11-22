import { useState, useEffect } from 'react';
import './App.css';

import { getListFolders, getThumbnails } from './functions/dropboxFuncs';
import ItemsList from './components/ItemsList/ItemsList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListFolders();
      setItems(res.entries);
      getThumbnails(res.entries);
    };

    fetchData();
  }, []);

  return <ItemsList items={items} />;
}

export default App;
