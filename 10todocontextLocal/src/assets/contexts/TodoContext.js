import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Hello",
        completed:false
    }],
        addTodo:(todo)=>{},
        removeTodo:(id)=>{},
        editTodo:(id,updatedTitle)=>{},
        clearCompletedTodos:(id) =>{},
        toggleTodo:(id)=>{}

});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}
