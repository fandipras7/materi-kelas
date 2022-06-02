import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Todo = () => {
    const {todo} = useSelector((state)=>state)
    const [todoList, setTodoList] = useState('')
    const dispatch = useDispatch()
    const addTodoList = ()=> {
        dispatch({type: 'LIST', payload: todoList})
        setTodoList('')
    }
    return (
     <div>
        <div className='row'>
          <input onChange={(e)=>{setTodoList(e.target.value)}} type="text" style={{width:"400px"}}/>
          <button className='btn btn-primary' style={{width:"100px"} onclick(()=>{addTodoList})}>Tambah</button>
        </div>

     </div>
    )
}

export default Todo