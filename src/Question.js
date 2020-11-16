import React, {useState} from 'react';
import QuestionBox from './QuestionBox';

const Question = ({question}) => {
  const [input, setInput] = useState("");

  return(
    <div className="question">
      <p>{question.value}</p>
    </div>
  )
}

export default Question;