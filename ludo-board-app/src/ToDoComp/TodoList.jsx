import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let styles = {
        hight:"content=fit",
        border : "2px solid black",
        borderRadius : "20px",
        padding:"10px"
    }

   

    let [todos, setTodo] = useState([{task:"sample task", id: uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo] = useState("");


    let handleInput = (env)=>{
      setNewTodo(()=>{
          return env.target.value;
      })
    }

   let addNewTask = ()=>{
        if(newTodo===""){
            console.log('empty');
            return;
        }

        setTodo((prevTodo)=>{
            return ([...prevTodo,{task : newTodo,id : uuidv4(),isDone:false}]);
        });

        setNewTodo(()=>{
            return "";
        })

   }

   let dltTask = (id)=>{
      setTodo((prevTodo)=>{
         return ( prevTodo.filter((task)=>task.id!==id));
      })
   }

   let toUpperCaseChange = ()=>{
    setTodo((prevTodo)=>{
        return prevTodo.map((todo) =>{
            return {
                ...todo,
                task : todo.task.toUpperCase(),
            };
        })
    })
   }

   let toLowerCaseChange  = ()=>{
      setTodo((prevTodo)=>{
        return prevTodo.map((todo)=>{
            return{
                ...todo,
                task : todo.task.toLowerCase(),
            }
        })
      })
   }

   let changeInUpperOne = (id)=>{
    setTodo((prevTodo)=>{
      return prevTodo.map((todo)=>{
            if(todo.id === id){
                return{
                    ...todo,
                    task : todo.task.toUpperCase(),
                }
            }
            return todo
        })

    })
   }

   let marksAsDone = (id)=>{
       setTodo((prevTodo)=>{
          return prevTodo.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    isDone:true
                }
            }
            return todo;
          })
       })
   }

    return(
        <div style={styles}>
            <h1>Todo List</h1>
            <hr /><hr />

            <input type="text" placeholder="add a task" onChange={handleInput} value={newTodo}/>
             &nbsp;&nbsp;
            <button onClick={addNewTask}>Add Task</button>

            <br /><br /><br />
            <hr /><hr />

             <h3>Task to do </h3>
            <ul>
                {
                  todos.map((todo)=>(
                    <div key={todo.id}>
                        <span style={{textDecoration:todo.isDone===true?"line-through":"none"}}>{todo.task}</span>  &nbsp; &nbsp;
                        <button onClick={()=>dltTask(todo.id)}>delete</button>
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>changeInUpperOne(todo.id)}>to Upper</button>
                        &nbsp;
                        &nbsp;
                        <button onClick={()=>marksAsDone(todo.id)}>Marks as Done</button>
                    </div>
                 ))
                }
            </ul>

           <hr /><hr />
           <button onClick={toUpperCaseChange}>To UpperCase</button>
           &nbsp; &nbsp;
           <button onClick={toLowerCaseChange}>To LowerCase</button>


        </div>
    )
}