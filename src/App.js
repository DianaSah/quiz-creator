import React from 'react';

import { Quiz } from './components/quiz/Quiz';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <Quiz />
    </div>
  );
}

export default App;
