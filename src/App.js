import React from 'react';

import { Quiz } from './components/quiz/Quiz';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Quiz />
      </header>
    </div>
  );
}

export default App;
