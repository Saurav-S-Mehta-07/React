import TaskTime from "./TaskTime.jsx";
import TodoTask from "./TodoTask";
import TodoBtns from "./TodoBtns";

export default function TodoTaskBox({todo,deleteTask,markAsDone}){
    return(
        <>
                <TaskTime date={todo.date}/>
                <TodoTask isDone={todo.isDone} task={todo.task}/>
                <TodoBtns id={todo.id} deleteTask={deleteTask} markAsDone={markAsDone}/>
                <hr />
        </>
    )
}