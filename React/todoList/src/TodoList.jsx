import { use, useState } from "react"

export default function TodoList(){
   let [todos, setTodos] = useState (["Sample Task"]);
   let [newTodo, setNewTodo] = useState ("");
   
   let addNewTask = ()=>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
   }
   let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
   }

   return(
    <div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
        <br />
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br />
        <hr />
        <h4>Tasks Todo</h4>
        <ul>
            {
                todos.map((todo)=>(
                    <li>{todo}</li>
                ))
            }
        </ul>

    </div>
   ) 
}