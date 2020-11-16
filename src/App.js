import './App.css';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Question from './Question';

const App = () => {
  const [questionsOne, setQuestionsOne] = useState([]);
  const [questionsTwo, setQuestionsTwo] = useState([]);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(1000);

  useEffect(() => {
    // Get 6 random categories, save to an array
    const categories = [];
    const questionSetOne = [];
    const questionSetTwo = [];
    Axios.get(`https://jservice.io/api/categories?count=100`)
    .then(response => {
      for (let i = 1; i <= 12; i++) {
        categories.push(response.data.splice(Math.floor(Math.random() * response.data.length), 1)[0]);
      }
    })
    .then(() => {
      categories.forEach(category => {
        Axios.get(`https://jservice.io/api/clues?category=${category.id}`)
        .then(response => {
          if (questionSetOne.length === 6) {
            questionSetTwo.push({
              category: category.title,
              questions: response.data
            });
          } else {
            questionSetOne.push({
              category: category.title,
              questions: response.data
            });
          };
        });
      });
    });
    setQuestionsOne(questionSetOne);
    setQuestionsTwo(questionSetTwo);
  },[]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRound = round + 1;
      setRound(newRound);
    }, 10000);
    return () => clearInterval(interval)
  }, [round]);

  return (
    <div className="App">
      { round === 0
      ? <p>Get Ready</p>
      : round === 1
        ?questionsOne.map(question => {
          return <Question question={question} />
        })
      : round >= 2
        ? questionsTwo.map(question => {
          return <Question question={question} />
        })
      : null}
    </div>
  );
}

export default App;
