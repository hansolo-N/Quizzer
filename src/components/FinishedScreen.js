import React from 'react'

function FinishedScreen({points,maxPoints,highscore,dispatch}) {
    const totalPercentage = (points /maxPoints)* 100

    let emoji;
    if(totalPercentage === 100){
        emoji = "🥇"
    }
    if(totalPercentage >= 80 && totalPercentage <100){
        emoji = "🥈"
    }
    if(totalPercentage >= 50 && totalPercentage <80){
        emoji = "🥉"
    }
    if(totalPercentage >=0 && totalPercentage <50){
        emoji = "🤨"
    }
    if(totalPercentage ===0){
        emoji = "😒"
    }
  return (
    <>
        <p className='result'>
            <span>{emoji}</span> 
            you scored <strong>{points}</strong> out of {maxPoints} points ({Math.round(totalPercentage)}%)
        </p>
        <p className='highscore'>(highscore: {highscore}points)</p>
        <button className='btn btn-ui' onClick={()=>dispatch({type:"reset"})}>Reset Quiz</button>
    </>

  )
}

export default FinishedScreen