import React from 'react'

function StartQuiz({numQuestions,setActive}) {
  return (
    <div>
      <h2>Welcome to the Quiz!</h2>
      <h3>{numQuestions} questions to test your react knowledge</h3>
      <button onClick={()=>setActive()}>Lets Start</button>
    </div>
  )
}

export default StartQuiz