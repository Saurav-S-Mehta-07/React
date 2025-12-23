import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";
import styles from "./Style.js"

export default function TodoList() {
  let [todos, setTodo] = useState([
    { task: "sample task", id: uuidv4(), isDone: false }
  ]);
  let [newTodo, setNewTodo] = useState("");

  const handleInput = (e) => setNewTodo(e.target.value);

  const addNewTask = () => {
    if (!newTodo) return;
    setTodo([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  const dltTask = (id) =>
    setTodo(todos.filter((task) => task.id !== id));

  const changeInUpperOne = (id) =>
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );

  const marksAsDone = (id) =>
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  const toUpperCaseChange = () =>
    setTodo(todos.map((t) => ({ ...t, task: t.task.toUpperCase() })));

  const toLowerCaseChange = () =>
    setTodo(todos.map((t) => ({ ...t, task: t.task.toLowerCase() })));

  const MarkAllAsDone = () =>
    setTodo(todos.map((t) => ({ ...t, isDone: true })));

  return (
    <div style={styles}>
      <h1>Todo List</h1>

      <TodoInput
        newTodo={newTodo}
        handleInput={handleInput}
        addNewTask={addNewTask}
      />

      <hr />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            dltTask={dltTask}
            changeInUpperOne={changeInUpperOne}
            marksAsDone={marksAsDone}
          />
        ))}
      </ul>

      <hr />

      <TodoActions
        toUpperCaseChange={toUpperCaseChange}
        toLowerCaseChange={toLowerCaseChange}
        MarkAllAsDone={MarkAllAsDone}
      />
    </div>
  );
}
