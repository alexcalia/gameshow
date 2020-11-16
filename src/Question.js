import React, {useState} from 'react';

const Question = ({question}) => {
  const [input, setInput] = useState("");

  return(
    question && 
      <div className="questionInfo">
        <p>{question.category}</p>
        {question.questions.map(question => {
          return <button key={question.id}>{question.value}</button>
        })}
    </div>
  )
}

export default Question;