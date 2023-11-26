import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../store/quizApi';
import { setQuiz, createNewQuiz, editQuiz } from '../../store/quizSlice';
import { QuizCard } from '../quizCard/QuizCard';
import { Button } from '../button/Button';

import styles from './Quiz.module.scss';

export function Quiz() {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quiz);

  async function getQuizData() {
    try {
      const { data } = await fetchData();
      dispatch(setQuiz(data));  
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuizData();
  }, []);

  return (
    <div className={styles.container}>
      {quiz
        ? <>
            <h1>{quiz.title}</h1>
            <h4>{quiz.description}</h4>
            <div>Follow video url: <a url={quiz.url}>here</a></div>
            <div className={styles.cards}>
              {quiz.questions_answers.map((questions) => 
                <QuizCard key={questions.id} {...questions} />
              )}
            </div>
            <Button onClick={() => dispatch(createNewQuiz({}))}>
              <span>Add new quiz question</span>
            </Button>
          </>
        : <div>Loading...</div>
      }
    </div>
  )
}