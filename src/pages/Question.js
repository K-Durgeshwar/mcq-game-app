import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Question({ setScore, questions }) {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const currentQuestionIndex = parseInt(id) - 1;
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption('');
  }, [currentQuestionIndex]);

  if (!questions.length) {
    return <p>Loading...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const options = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);

  const optionLabels = ['A', 'B', 'C', 'D'];

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      navigate(`/question/${currentQuestionIndex + 2}`);
    } else {
      navigate('/results');
    }
  };

  return (
    <div className="question-container">
      <h2>{currentQuestion.question}</h2>
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedOption === option ? 'selected-option' : ''}`}
          onClick={() => setSelectedOption(option)}
        >
          <strong>{optionLabels[index]}:</strong> {option}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={!selectedOption}>
        Next
      </button>
    </div>
  );
}

export default Question;
