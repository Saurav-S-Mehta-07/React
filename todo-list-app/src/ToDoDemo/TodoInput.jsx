export default function TodoList({addTask,addTaskInput,newTodo}){
    return (
        <div>
              <input type="text" placeholder="add task" onChange={addTaskInput} value={newTodo}/>
              &nbsp;
              &nbsp;
              <button onClick={addTask}>add Task</button>
        </div>
    )
}