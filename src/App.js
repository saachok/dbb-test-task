import { useEffect } from 'react';
import './App.css';

import { getListFolders } from './functions/dropboxFuncs';

function App() {
  useEffect(() => {
    getListFolders();
  }, []);

  return <div>test</div>;
}

export default App;
