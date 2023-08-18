import React, { useState } from 'react'
import { useDispatch } from 'react'
import { addtodo} from '../actions'
import '../components/Style.css'



const Todo = () => {
  const[inputdata,setIputData]=useState('')
  const dispatch=useDispatch()
  return (
    <div>
         <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption><h1>Add Your Work List 😵</h1></figcaption>
          </figure>
          <div className="addItems">
            <input type="text" value={inputdata} placeholder="✍️Write here" 
            onChange={(event)=>setIputData(event.target.value)}></input>
            <i className="fa fa-plus add-btn" onClick={()=>dispatch(addtodo(inputdata))}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo