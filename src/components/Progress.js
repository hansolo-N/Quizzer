import React from 'react'

function Progress({numQuestions,points,index,maxPoints,answer}) {
  return (
    <header className='progress'>
        <progress value={points + Number(answer!==null)} max={maxPoints}></progress>
        <p>Question<strong>{index + 1}</strong>/{numQuestions}</p>
        <p><strong>{points}</strong>/{maxPoints} points</p>
    </header>


  )
}

export default Progress