import { Answer } from '../answer/Answer';

import styles from './QuizCard.module.scss';

export function QuizCard({
  text,
  answers
}) {
  return (
    <div className={styles.container}>
      <div className={styles.question}>{text}</div>
      <div className={styles.answers}>
        {answers.map((answer) => <Answer {...answer}/>)}
      </div>
    </div>
  )
}