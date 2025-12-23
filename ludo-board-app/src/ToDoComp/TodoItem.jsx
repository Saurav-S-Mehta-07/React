export default function TodoItem({
  todo,
  dltTask,
  changeInUpperOne,
  marksAsDone
}) {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.isDone ? "line-through" : "none"
        }}
      >
        {todo.task}
      </span>
      &nbsp;&nbsp;
      <button onClick={() => dltTask(todo.id)}>delete</button>
      &nbsp;&nbsp;
      <button onClick={() => changeInUpperOne(todo.id)}>to Upper</button>
      &nbsp;&nbsp;
      <button onClick={() => marksAsDone(todo.id)}>Mark as Done</button>
    </div>
  );
}
