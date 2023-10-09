import React from 'react'

function NextQuestion({dispatch,answer}) {
    if(answer === null){
        return null
    }
  return (

    <button className= "btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>Next Question</button>
  )
}

export default NextQuestion