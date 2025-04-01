import { useEffect, useState } from "react";``
import { TodoProvier } from "../contexts/TodoContext";
import { TodoForm, TodoItem } from "../components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // setTodos(todo) that will update todo in a way that all prev todos will delete and this will store alone

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    // console.log("delete is working" , id);
    
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed } // ✅ Fixed spelling
          : prevTodo
      )
    );
  };
  
// local storage :
useEffect(() => {
  const  todos =JSON.parse( localStorage.getItem("todos"))
  if (todos &&  todos.length > 0) {
    setTodos(todos)
  }
}, [])

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvier
      value={{ addTodo, deleteTodo, toggleComplete, updateTodo,todos }}
    >
      <div className="bg-[#172842] min-h-screen w-full py-8">
        <div className="w-full mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            {/* Manage Your Todos */}
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full">
<TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvier>
  );
}
export default App;
