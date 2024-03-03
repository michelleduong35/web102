import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard';

function App() {
  const [currentCardID, setCount] = useState(1)
  const [isFlipped, setIsFlipped] = useState(false);

  const updateLeft = () => {
    setCount(prevId => prevId === 1 ? flashcards.length : prevId - 1);
    setIsFlipped(false);
  }

  const updateRight = () => {
    setCount(prevId => prevId === flashcards.length ? 1 : prevId + 1);
    setIsFlipped(false);
  }

  const flashcards = [
    {
      id: 1,
      question: "https://th.bing.com/th/id/OIP.cj_L84wE7M20Y-kPMZ4cbgHaMW?rs=1&pid=ImgDetMain",
      answer: "Justin Bieber"
    },
    {
      id: 2,
      question: "https://celebmafia.com/wp-content/uploads/2014/09/kendall-jenner-harper-s-bazaar-celebrates-icons-by-carine-roitfeld-in-new-york-city-sept.-2014_1.jpg",
      answer: "Kendall Jenner"
    },
    {
      id: 3,
      question: "https://i.pinimg.com/originals/78/b3/cd/78b3cdb7520c233c595f6736c99d1631.jpg",
      answer: "Kim Taehyung (V)"
    },
    {
      id: 4,
      question: "https://i.pinimg.com/originals/7a/6e/87/7a6e874fa00a1598b01c9de07cb04c06.jpg",
      answer: "Minji (New Jeans)"
    },
    {
      id: 5,
      question: "https://th.bing.com/th/id/OIP.4CbvRRvCOCzc3YPHG4EG9QHaLH?rs=1&pid=ImgDetMain",
      answer: "Rihanna"
    },
    {
      id: 6,
      question: "https://th.bing.com/th/id/OIP.xTUpLpAmfqneOv8jX8PwCgHaLF?rs=1&pid=ImgDetMain",
      answer: "DEAN"
    },
    {
      id: 7,
      question: "https://images.moviefit.me/p/o/46798-iu.jpg",
      answer: "Lee Ji-eun (IU)"
    },
    {
      id: 8,
      question: "https://th.bing.com/th/id/OIP.pkoUKpX6KKmOh1ZC9UvwXwHaHa?rs=1&pid=ImgDetMain",
      answer: "Olivia Rodrigo"
    },
    {
      id: 9,
      question: "https://th.bing.com/th/id/OIP.Vegsshdj4Qe7Gdh8-X5oJQHaK4?rs=1&pid=ImgDetMain",
      answer: "Drake"
    },
    {
      id: 10,
      question: "https://th.bing.com/th/id/OIP.CPXas2OQoWQPang_azywJwHaLH?rs=1&pid=ImgDetMain",
      answer: "Taylor Swift"
    }
  ];

  return (
    <>
      <h1>Guess the Celebrity!</h1>
      <h2>Number of Cards: {flashcards.length}</h2>
      <div className="flashcardView">
      <Flashcard flashcard={flashcards.find(card => card.id === currentCardID)} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </div>
      <div className="navButtons">
        <button onClick={updateLeft}>⬅️</button>
        <button onClick={updateRight}>➡️</button>
      </div>
    </>
  )
}

export default App
