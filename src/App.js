import { useEffect, useReducer } from 'react'
import Header from "./Header"
import Main from "./Main"

const intialState = {
  questions:[],

  //loading active error ready finished 
  status: 'loading'
}


function reducer(state,action){


  switch(action.type){
      case "dataRecieved":
          return {...state,questions:action.payload,status:"ready"}
      case "dataFailed":
          return {...state,status:"error"}    
      default:
        throw new Error("unknown case")

}
}




export default function App(){
  const [state,dispatch] = useReducer(reducer,intialState)


  useEffect(function(){
      async function fetchQuestions(){
        try {
          const response = await fetch("http://localhost:8000/questions")
          const questions = await response.json()
          dispatch({type:"dataRecieved",payload:questions})
        } 
        catch (error) {
          dispatch({type:"dataFailed"})
        }

      }
      fetchQuestions()
  },[])



return(
    <div className="app">
      <Header/>
      <Main/>
    </div>
  ) 

}