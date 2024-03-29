import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { QuizesList } from './pages/quizesList/QuizesList';
import { Quiz } from './pages/quiz/Quiz';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/quiz-creator/" Component={QuizesList} />
        <Route path="/quiz-creator/:id" Component={Quiz} />
      </Routes>
    </div>
  );
}

export default App;
