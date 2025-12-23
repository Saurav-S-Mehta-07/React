export default function TodoInput({ newTodo, handleInput, addNewTask }) {
  return (
    <>
      <input
        type="text"
        placeholder="add a task"
        onChange={handleInput}
        value={newTodo}
      />
      &nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
    </>
  );
}
