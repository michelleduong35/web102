import React, { useState } from 'react';

function Flashcard({ flashcard, isFlipped, setIsFlipped }) {
  //const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
      {flashcard.question.startsWith('http') ? (
          <img className="celebrityImg" src={flashcard.question} alt="Question" />
        ) : (
          <p>{flashcard.question}</p>
        )}
      </div>
      <div className="back">
        <p>{flashcard.answer}</p>
      </div>
    </div>
  );
}

export default Flashcard;