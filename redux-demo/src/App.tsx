import { useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/counter/counter.slice'
import { RootState } from './store'

const reducer = ( state:any, action:any)=>{
  switch(action.type){
    case "add":
      return {todos: [...state.todos, { type : action.payload.type, isCheck : action.payload.isCheck}]}
    case "update":
      console.log(state.todos[action.payload.position])
      state.todos[action.payload.position].isCheck = action.payload.completed
      console.log(state.todos[action.payload.position])
      return {todos:[...state.todos]}
    }

  }

function App() {
const count = useSelector((state: RootState) => {
    return state.counter.value
  })
const dispatch = useDispatch()

const [item, setItem] = useState("")
const [check, setCheck] = useState(false)



const initialState = {todos:[]}

const [state, dispa] = useReducer(reducer, initialState)

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    
<div>
  <input type="text"  value={item} onChange={(e)=>setItem(e.target.value)} />
  <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)} />
  <button onClick={()=>dispa({type: "add", payload: {isCheck:check, type: item}})}>manda</button>
  </div>
  <div>
    {state!.todos.map((curr,index)=>(<div key={index}><p >{curr.type}</p><input type="checkbox" onChange={(e)=>dispa({type:"update", payload:{position:index, completed:e.target.checked}})} checked={curr.isCheck}></input></div>))}
    </div>   
    </>
  )
}

export default App
