import './App.css';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Get 6 random categories, save to an array
    const categories = [];
    Axios.get(`https://jservice.io/api/categories?count=100`)
    .then(response => {
      for (let i = 1; i <= 6; i++) {
        categories.push(response.data.splice(Math.floor(Math.random() * response.data.length), 1)[0]);
      }
      console.log(categories);
    });
  })

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
