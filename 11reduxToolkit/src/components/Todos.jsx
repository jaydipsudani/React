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
                <input type='checkbox' checked={todo.completed} onChange={()=>dispatch(toggleTodo(todo.id))}/>
                <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  dispatch(updateTodo(todo.id))
              }}
              disabled={todo.completed}
          >  
          </button>
            </li>
            
        )):"no data"}
        
        </>
    )
}
export default Todos

// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import {removeTodo } from '../features/todo/todoSlice'
// export default function Todos() {
//     const todos = useSelector(state => state.todos);
//     const dispatch = useDispatch();

//     return (
//         <>
//       {todos.map((todo)=>
//         <li key={todo.id}>
//             {todo.text}
//             <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
//             <input type='checkbox' checked={todo.completed} disabled/>
//             <button disabled={todo.completed}>Edit</button>
//             <button disabled={todo.completed}>Delete</button>
//             <button disabled={todo.completed}>Toggle</button>
//             <button disabled={todo.completed}>Save</button>
//             <button disabled={todo.completed}>Cancel</button>
//             <button disabled={todo.completed}>Archive</button>
//             <button disabled={todo.completed}>Unarchive</button>
//             <button disabled={todo.completed}>Complete</button>
//             <button disabled={todo.completed}>Incomplete</button>
//             <button disabled={todo.completed}>Move Up</button>
//             <button disabled={todo.completed}>Move Down</button>
//             <button disabled={todo.completed}>Pin</button>
//         </li>
//       )}
//         </>
//     )
// }

