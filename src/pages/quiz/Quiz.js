import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
  createNewQuiz,
  editQuiz,
  selectQuizById
} from '../../store/quizSlice';
import { createData, updateData } from '../../store/quizApi';
import { Button } from '../../components/button/Button';
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
  const [newQuiz, setNewQuiz] = useState(quiz || initialQuiz);

  const dispatch = useDispatch();

  async function handleCreate(formData) {
    try {
      const { data } = await createData(formData);
      dispatch(createNewQuiz(data));  
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(formData) {
    try {
      const { data } = await updateData(formData);
      dispatch(editQuiz(data));  
    } catch (error) {
      console.error(error);
    }
  }

  const handleFormSubmit = (formData) => {
    setNewQuiz(formData);

    id && id !== 'new'
    ? handleUpdate(formData)
    : handleCreate(formData);
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
    </div>
  )
}