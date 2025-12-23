export default function TodoInput({ newTodo, handleInput, addNewTask }) {
  return (
    <>
      <input
         className="addTaskInput"
        type="text"
        placeholder="add a task"
        onChange={handleInput}
        value={newTodo}
      />
      &nbsp;&nbsp;
      <button onClick={addNewTask} className="btn">Add Task</button>
    </>
  );
}
