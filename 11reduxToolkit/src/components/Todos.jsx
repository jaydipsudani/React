import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todoss = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    return (
        <>
        
        {todoss ? todoss.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </li>
        )):"no data"}
        
        </>
    )
}

export default Todos
