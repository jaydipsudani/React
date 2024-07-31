import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {removeTodo , toggleTodo,updateTodo} from '../features/todo/todoSlice'

function Todos() {
    const todoss = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    return (
        <>
        
        {todoss ? todoss.map((todo)=>(
            <li className={todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" } key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                <input type='checkbox'  checked={todo.completed} onChange={()=>dispatch(toggleTodo(todo.id))}/>
                <button onClick={()=>dispatch(updateTodo(todo.id))}>Edit</button>
            </li>
            
        )):"no data"}
        
        </>
    )
}

export default Todos
