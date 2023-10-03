import React from 'react'

function StartQuiz({numQuestions}) {
  return (
    <div>
      <h2>Welcome to the Quiz!</h2>
      <h3>{numQuestions} questions to test your react knowledge</h3>
      <button>Lets Start</button>
    </div>
  )
}

export default StartQuiz