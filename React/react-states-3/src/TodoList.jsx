import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  // To Update all element in array

  // let UpperCaseAll = () => {
  //   setTodos((prevTodos) => (
  //     prevTodos.map((todo) => {
  //       return {
  //         ...todo,
  //         task: todo.task.toUpperCase(),
  //       };
  //     })
  //   ));
  // };

  // To update one element in arrey

  // let UpperCaseOne = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };

  //
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true, };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* <span>{todo.task}</span>  */}
            <span style={todo.isDone ? { textDecorationLine: "Line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            &nbsp; &nbsp;
            {/* <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>  */}
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      {/* <button onClick={UpperCaseAll}>UpperCase All</button>  */}
      <button onClick={markAllDone}>Mark All as Done</button>
    </div>
  );
}
