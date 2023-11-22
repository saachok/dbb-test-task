import { useState, useEffect } from 'react';
import './App.css';

import { getListFolders } from './functions/dropboxFuncs';
import ItemsList from './components/ItemsList/ItemsList';

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListFolders();
      setItems(res.entries);
    };

    fetchData();
  }, []);

  return <ItemsList items={items} />;
}

export default App;
