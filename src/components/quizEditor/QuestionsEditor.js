import React, { useState } from 'react';

import { Input } from "../input/Input";

import styles from './QuizEditor.module.scss';

export function QuestionsEditor({
    questionsAnswers: initData,
    handleQuestions
}) {
  const [data, setData] = useState(initData);

  const handleChange = (e, id, inputName) => {
    const newQ = {...data[id], [inputName]: e.target.value}
    const newData = [...data];
    newData[id] = newQ;

    setData(newData);
    handleQuestions(newData);
  }

  return (
    <div className={styles.container}>
      {data.map((qa, index) => 
        <fieldset>
          <Input
            key={qa.id}
            label={`Enter question number ${index}:`}
            value={qa.text}
            onChange={(e) => handleChange(e, index, 'text')}
          />
          <Input
            key={qa.id}
            label={`Enter feedback for false response:`}
            value={qa.feedback_false}
            onChange={(e) => handleChange(e, index, 'feedback_false')}
          />
          <Input
            key={qa.id}
            label={`Enter feedback for correct response:`}
            value={qa.feedback_true}
            onChange={(e) => handleChange(e, index, 'feedback_true')}
          />
        </fieldset>
      )}
    </div>
  )
}