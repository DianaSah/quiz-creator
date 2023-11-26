import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { setQuiz, createNewQuiz, editQuiz, selectQuizById } from '../../store/quizSlice';
import { QuizCard } from '../../components/quizCard/QuizCard';
import { Button } from '../../components/button/Button';
import { Modal } from '../../components/modal/Modal';
import { QuizEditor } from '../../components/quizEditor/QuizEditor';

import styles from './Quiz.module.scss';
import { QuizPreview } from '../../components/quiz/QuizPreview';

export function Quiz() {
  let initialQuiz = {
    title: '',
    description: '',
    url: '',
    questions_answers: [
      {
        text: '',
        feedback_true: '',
        feedback_false: '',
        answers: [{
          text: '',
          is_true: false
        }]
      }
    ]
  }

  const navigate = useNavigate();
  let { id } = useParams();
  const [ quiz ] = useSelector((state) => selectQuizById(state, id));

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuiz, setNewQuiz] = useState(quiz || initialQuiz);

  const dispatch = useDispatch();

  const handleFormSubmit = (formData) => {
    // console.log(e);
    // console.log(e.target.text.value);
    console.log(formData);
    setNewQuiz(formData);
    dispatch(editQuiz(formData));
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button
          mode='primary'
          onClick={() => navigate(-1)}
          className={styles.backButton}
        >
          Back
        </Button>
        <Button
          onClick={() => setIsPreviewOpen(!isPreviewOpen)}
          className={styles.backButton}
        >
          {isPreviewOpen ? 'Back to editing' : 'Preview'} 
        </Button>
      </div>
      {isPreviewOpen
        ? <QuizPreview data={newQuiz} />
        : <QuizEditor data={newQuiz} handleFormSubmit={handleFormSubmit} />
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