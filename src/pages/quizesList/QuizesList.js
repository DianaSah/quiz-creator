import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../store/quizApi';
import { setQuiz, createNewQuiz, editQuiz } from '../../store/quizSlice';
import { Button } from '../../components/button/Button';
import { transformYoutubeUrl } from '../../helpers/dataTransform';

import styles from './QuizesList.module.scss';

export function QuizesList() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quizzes);

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
      <h1>Quiz Creator/Editor Interface</h1>
      {quizzes?.map((quiz) => 
        <div key={quiz.id} className={styles.card}>
          <h1>{quiz.title}</h1>
          <h4>{quiz.description}</h4>
          <iframe src={transformYoutubeUrl(quiz.url)}
            allow='autoplay; encrypted-media'
            title='video'
          />
          <Button
            mode='primary'
          >
            <span>Edit</span>
          </Button>
        </div>)
      }
      <Button
        mode='primary'
      >
        <span>Add new quiz</span>
      </Button>
    </div>
  )
}
