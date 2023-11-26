import { QuizCard } from '../quizCard/QuizCard';
import { transformYoutubeUrl } from '../../helpers/dataTransform';

import styles from './QuizPreview.module.scss';

export function QuizPreview({
  data
}) {
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <h4>{data.description}</h4>
      <iframe src={transformYoutubeUrl(data.url)}
        allow='autoplay; encrypted-media'
        title='video'
      />
      <div className={styles.cards}>
        {data?.questions_answers?.map((questions) => 
          <QuizCard
            key={questions.id}
            {...questions}
          />
        )}
      </div>
    </div>
  )
}