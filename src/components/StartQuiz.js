import React from 'react'

function StartQuiz({numQuestions,dispatch}) {
  return (
    <div>
      <h2>Welcome to the Quiz!</h2>
      <h3>{numQuestions} questions to test your react knowledge</h3>
      <button onClick={()=>dispatch({type:"setActive"})}>Lets Start</button>
    </div>
  )
}

export default StartQuiz