import TodoTaskBox from "./TodoTaskBox"
export default function AllTasks({todos,deleteTask,markAsDone}){
    return (
        <>
         <div>
            <ul>
              {
              todos.map((todo)=>(
                  <div key={todo.id}>
                      <TodoTaskBox todo={todo} deleteTask={deleteTask} markAsDone={markAsDone}/>
                      <hr />
                  </div>
              ))
              }
            </ul>
          </div>
        </>
    )
}