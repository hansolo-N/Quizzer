import React from 'react'

function NextQuestion({dispatch,answer,index,numQuestions}) {
    if(answer === null){
        return null
    }

    if(index < numQuestions -1 ){
      return (
        <button className= "btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>Next Question</button>
      )
    }

    if(index === numQuestions -1 ){
      return (
        <button className= "btn btn-ui" onClick={()=>dispatch({type:"finshed"})}>Finished</button>
      )
    }

}

export default NextQuestion