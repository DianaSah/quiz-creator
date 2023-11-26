import React, { useState } from 'react';

import { QuestionsEditor } from './QuestionsEditor';
import { Input } from "../input/Input";
import { Button } from '../button/Button';

export function QuizEditor({
    data: initData,
    handleFormSubmit
}) {
  const [data, setData] = useState(initData);

  const handleChange = (e) => {
    const newData = {...data, title: e.target.value};
    setData(newData);
  }

  const handleQuestions = (questionsAnswers) => {
    setData({...data, questions_answers: questionsAnswers});
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleFormSubmit(data);
    }}>
      <Input
        label='Enter quiz title:'
        value={data.title}
        onChange={handleChange}
      />
      <Input
        label='Enter quiz description:'
        value={data.description}
      />
      <QuestionsEditor questionsAnswers={data.questions_answers} handleQuestions={handleQuestions} />
      <Button type='submit'>Submit</Button>
    </form>
  )
}