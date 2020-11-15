import './App.css';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Get 6 random categories, save to an array
    const categories = [];
    const questionSet = [];
    Axios.get(`https://jservice.io/api/categories?count=100`)
    .then(response => {
      for (let i = 1; i <= 6; i++) {
        categories.push(response.data.splice(Math.floor(Math.random() * response.data.length), 1)[0]);
      }
    })
    .then(() => {
      categories.forEach(category => {
        console.log(category.id)
        Axios.get(`https://jservice.io/api/clues?category=${category.id}`)
        .then(response => {
          questionSet.push({
            category: category.title,
            questions: response.data
          });
          console.log(response.data);
        });
      });
    });

    setQuestions(questionSet);
  },[]);

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
