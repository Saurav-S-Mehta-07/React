import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput.jsx";
import TodoActions from "./TodoActions.jsx";
import AllTasks from "./AllTasks.jsx";
import TodoHeading from "./TodoHeading.jsx";


export default function TodoList(){

    let [todos, setTodo] = useState([]);
    let [newTodo,setNewTodo] = useState("");

    let addTask = ()=>{
       if(newTodo==="")return
       setTodo((preTodo)=>{
          return ([...preTodo, {task:newTodo, id:uuidv4(),isDone:false,date:Date()}]);
       })
       setNewTodo(()=>{return ""});
    }

    let addTaskInput = (event)=>{
        setNewTodo(()=>{return event.target.value})
    }
    
    let deleteTask = (id)=>{
        setTodo((prevTodo)=>{
            return (prevTodo.filter((todo)=>todo.id !== id));
        })
    }

    let markAsDone = (id)=>{
        setTodo((prevTodo)=>{
           return prevTodo.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,
                    isDone : !todo.isDone
                }
            }
            return todo;
           })
        })
    }

    let markAllAsDone = ()=>{
       setTodo((prevTodo)=>{
           return prevTodo.map((todo)=>{
            return {
                ...todo,
                isDone:true
            }
           })
        })
    }
    
    let deleteAll = ()=>{
       setTodo(()=>{return []})
    }

    return(
        <div>
           <TodoHeading/>
           <hr />
           <TodoInput addTask={addTask} addTaskInput={addTaskInput} newTodo={newTodo}/>
           <hr />
           <AllTasks todos={todos} deleteTask={deleteTask} markAsDone={markAsDone}/>
           {todos.length>0&&<TodoActions deleteAll={deleteAll} markAllAsDone={markAllAsDone}/>}
        </div>
    )
}
