import React, { useState } from 'react';

import { QuestionsEditor } from './QuestionsEditor';
import { Input } from "../input/Input";
import { Button } from '../button/Button';

export function QuizEditor({
    data: initData,
    handleFormSubmit
}) {
  const [data, setData] = useState(initData);

  const handleChange = (e, inputName) => {
    const newData = {...data, [inputName]: e.target.value};
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
        onChange={(e) => handleChange(e, 'title')}
      />
      <Input
        label='Enter quiz description:'
        value={data.description}
        onChange={(e) => handleChange(e, 'description')}
      />
      <Input
        label='YouTube video url:'
        value={data.url}
        onChange={(e) => handleChange(e, 'url')}
      />
      <QuestionsEditor questionsAnswers={data.questions_answers} handleQuestions={handleQuestions} />
      <Button type='submit'>Submit</Button>
    </form>
  )
}