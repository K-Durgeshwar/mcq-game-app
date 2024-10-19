import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Results from './pages/Results';
import Navbar from './components/Navbar'; 
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home setQuestions={setQuestions} />} />
        <Route path="/question/:id" element={<Question setScore={setScore} questions={questions} />} />
        <Route path="/results" element={<Results score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
