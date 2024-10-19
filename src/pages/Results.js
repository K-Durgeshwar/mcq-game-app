import React from 'react';
import { Link } from 'react-router-dom';

function Results({ score }) {
  return (
    <div className="results">
      <h1>Game Over!</h1>
      <h2>Your Score: {score}</h2>
      <Link to="/">
        <button>Play Again</button>
      </Link>
    </div>
  );
}

export default Results;