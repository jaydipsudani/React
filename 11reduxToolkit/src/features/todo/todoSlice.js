import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1,text:'Hello world',completed: false,}]
}

export const todoSlice = createSlice({
    name:'s',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !==action.payload)
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map(todo=>todo.id === action.payload? {...todo,toggleTodo:!todo.toggleTodo}:todo)
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map(todo=>todo.id === action.payload.id? action.payload:todo)
           // state.todos = state.todos.map(todo=>todo.id === action.payload.id? action.payload:todo)
        },
        
    }

})

export const {addTodo,removeTodo,toggleTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer