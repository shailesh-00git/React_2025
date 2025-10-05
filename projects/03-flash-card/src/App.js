import React from "react";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    id: 4,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    id: 5,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
  },
  {
    id: 6,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
  },
  {
    id: 7,
    question: "Which gas do humans need to breathe?",
    answer: "Oxygen",
  },
  {
    id: 8,
    question: "What is the largest ocean on Earth?",
    answer: "Pacific Ocean",
  },
];

export default function App() {
  return (
    <div className="flash-cards-container">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = React.useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <>
      {questions.map((question) => (
        <div
          className={`flash-cards ${
            question.id === selectedId ? "selected" : ""
          }`}
          key={question.id}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </>
  );
}
