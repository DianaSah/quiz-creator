import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../store/quizApi';
import { setQuiz, createNewQuiz, editQuiz } from '../../store/quizSlice';
import { QuizCard } from '../quizCard/QuizCard';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';

import styles from './Quiz.module.scss';

export function Quiz() {
  let initialValues = {
    text: '',
    feedback_true: '',
    feedback_false: '',
    answers: [{
      text: '',
      is_true: false
    }]
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuiz, setNewQuiz] = useState(initialValues);

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
            <Button
              mode='primary'
              onClick={() => setIsModalOpen(true)}
            >
              <span>Add new quiz question</span>
            </Button>
          </>
        : <div>Loading...</div>
      }
      {isModalOpen && 
        <Modal
          isOpen={isModalOpen}
          mode='create'
          onClose={() => setIsModalOpen(false)}
          onSave={() => {
            dispatch(createNewQuiz(newQuiz));
            setIsModalOpen(false);
          }}
          data={newQuiz}
          setNewQuiz={setNewQuiz}
        />
      }
    </div>
  )
}