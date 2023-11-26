import MOCKED_DATA from '../../mocked-data.json';
import { QuizCard } from '../quizCard/QuizCard';

import styles from './Quiz.module.scss';

export function Quiz() {
  return (
    <div className={styles.container}>
      <h1>{MOCKED_DATA.title}</h1>
      <h4>{MOCKED_DATA.description}</h4>
      <div>Follow video url: <a url={MOCKED_DATA.url}>here</a></div>
      <div className={styles.cards}>
        {MOCKED_DATA.questions_answers.map((questions) => 
          <QuizCard {...questions} />
        )}
      </div>
    </div>
  )
}