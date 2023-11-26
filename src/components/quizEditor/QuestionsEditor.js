import React, { useState } from 'react';

import { Input } from "../input/Input";

export function QuestionsEditor({
    questionsAnswers: initData,
    handleQuestions
}) {
  const [data, setData] = useState(initData);

  const handleChange = (e, id) => {
    const newQ = {...data[id], text: e.target.value}
    const newData = [...data];
    newData[id] = newQ;
    setData(newData);
    handleQuestions(newData);
  }


  return (
    <div>
      {data.map((qa, id) => 
        <Input
          label='Enter question:'
          value={qa.text}
          onChange={(e) => handleChange(e, id)}
        />
      )}

    </div>
  )
}