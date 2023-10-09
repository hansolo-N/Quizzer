import React from 'react'
import { useEffect } from 'react'


function Timer({dispatch,timeRemaining }) {
    const mins = Math.floor(timeRemaining/60)
    const seconds = timeRemaining % 60
useEffect(function(){
    const id = setInterval(function(){
        dispatch({type:"timer"})
    },1000)

    return ()=>{
        clearInterval(id)
    }
},[dispatch])

  return (

    <div className='timer'>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
    </div>
  )
}

export default Timer