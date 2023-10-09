import React from 'react'

function FinishedScreen({points,maxPoints,highscore}) {
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
            you scored <strong>{points}</strong> out of {maxPoints} {Math.round(totalPercentage)} %
        </p>
        <p className='highscore'>(highscore: {highscore} points)</p>
    </>

  )
}

export default FinishedScreen