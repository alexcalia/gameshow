import React from 'react';

const Question = ({question, openQuestion}) => {
  return(
    question && 
      <div className="questionInfo">
        <p>{question.category}</p>
        {question.questions.map(question => {
          return <button key={question.id} onClick={openQuestion(question)}>{question.value}</button>
        })}
    </div>
  )
}

export default Question;