export default function TodoItem({
  todo,
  dltTask,
  changeInUpperOne,
  marksAsDone
}) {
  return (
    <div>
      <span className="task"
        style={{
          textDecoration: todo.isDone ? "line-through" : "none"
        }}
      >
        {todo.task}
      </span>
      &nbsp;&nbsp;
      <button onClick={() => dltTask(todo.id)} className="btn">delete</button>
      &nbsp;&nbsp;
      <button onClick={() => changeInUpperOne(todo.id)} className="btn">to Upper</button>
      &nbsp;&nbsp;
      <button onClick={() => marksAsDone(todo.id)} className="btn">Mark as Done</button>
    </div>
  );
}
