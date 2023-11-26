import { Answer } from '../answer/Answer';

import styles from './AnswersList.module.scss';

export function AnswersList({
  data,
  mode
}) {
  return (
    <div className={styles.container}>
      {data?.map((answer, index) => 
        <Answer
          key={answer.id}
          text={answer.text}
          mode='edit'
        />
      )}
    </div>
  )
}