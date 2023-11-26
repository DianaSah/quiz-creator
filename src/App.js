import React from 'react';

import { QuizesList } from './pages/quizesList/QuizesList';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <QuizesList />
    </div>
  );
}

export default App;
