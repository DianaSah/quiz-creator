import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { setQuiz, createNewQuiz, editQuiz, selectQuizById } from '../../store/quizSlice';
import { QuizCard } from '../../components/quizCard/QuizCard';
import { Button } from '../../components/button/Button';
import { Modal } from '../../components/modal/Modal';

import styles from './Quiz.module.scss';

export function Quiz() {
  let initialQuiz = {
    text: '',
    feedback_true: '',
    feedback_false: '',
    answers: [{
      text: '',
      is_true: false
    }]
  }

  const navigate = useNavigate();
  let { id } = useParams();
  const [ quiz ] = useSelector((state) => selectQuizById(state, id)) || [initialQuiz];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuiz, setNewQuiz] = useState(initialQuiz);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Button
        mode='primary'
        onClick={() => navigate(-1)}
        className={styles.backButton}
      >Back</Button>
      <>
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