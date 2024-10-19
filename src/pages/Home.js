import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home({ setQuestions }) {
  const navigate = useNavigate();

  const startGame = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple');
      setQuestions(response.data.results);
      navigate('/question/1');
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="home">
      <h1>Welcome to QuizMaster!</h1>
      <p>Test your knowledge and challenge yourself with our exciting quiz game.</p>
      
      <button onClick={startGame}>Start Game</button>

    </div>
  );
}

export default Home;