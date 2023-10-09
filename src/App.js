import { useEffect, useReducer } from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Loader from "./components/Loader"
import Error from "./components/Error"
import StartQuiz from "./components/StartQuiz"
import Question from './components/Question'
import NextQuestion from './components/NextQuestion'
import Progress from './components/Progress'
import FinishedScreen from './components/FinishedScreen'
import Footer from './components/Footer'
import Timer from './components/Timer'

const intialState = {
  questions:[],

  //loading active error ready finished 
  status: 'loading',
  index:0,
  answer: null,
  points: 0,
  highScore: 0,
  timeRemaining: 10
}


function reducer(state,action){


  switch(action.type){
      case "dataRecieved":
          return {...state,questions:action.payload,status:"ready"}
      case "dataFailed":
          return {...state,status:"error"}
      case "setActive":
          return {...state,status:"active"}
      case "newAnswer":
        const question = state.questions.at(state.index)
          return {
            ...state,
            answer:action.payload,
            points: action.payload === question.correctOption? 
            state.points + question.points: state.points
          }
      case "nextQuestion":
        return   {...state,index:state.index+1,answer:null}
        
      case "finished":
        return {...state,status:"finished",highscore: state.points > state.highscore ? state.points: state.highscore}

      case "reset":
        return {intialState,questions:state.questions,status:"ready"}

      case "timer":
        return   {...state,timeRemaining:state.timeRemaining -1,
        status: state.timeRemaining ===0? "finished": state.status}
      default:
        throw new Error("unknown case")

}
}




export default function App(){
  const [{questions,status,index,answer,points,highscore,timeRemaining},dispatch] = useReducer(reducer,intialState)

  const numQuestions = questions.length

  const maxAnswerPoints = questions.reduce((prev,curr)=>prev + curr.points,0)

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
      <Main>
        {status ==="loading" && <Loader/>}
        {status ==="error" && <Error/>}
        {status === "ready" && <StartQuiz numQuestions = {numQuestions}  dispatch={dispatch}/>}
        {status=== "active" && (
          <>
          <Progress numQuestions = {numQuestions} index={index} points={points} maxPoints={maxAnswerPoints} answer={answer}/>
          <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
          <Footer>
            <Timer timeRemaining={timeRemaining} dispatch={dispatch}/>
            <NextQuestion dispatch = {dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
          </Footer>
         
         
          </>
        )}
        {status ==="finished" && <FinishedScreen points={points} maxPoints={maxAnswerPoints} highscore={highscore} dispatch={dispatch}/>}
      </Main>
    </div>
  ) 

}