import { createContext ,useContext } from "react";
export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todoMsg:"Hey",
            completed:false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {}, 
    deleteTodo : (id) => {},
    toggleComplete : (id) => {} 
});

export const useTodo = () => {
return useContext(TodoContext)
}
export const TodoProvier  = TodoContext.Provider; 