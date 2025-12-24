export default function TodoBtns({id,deleteTask,markAsDone}){
    return (
        <>
        &nbsp; &nbsp; <button onClick={()=>deleteTask(id)}>delete</button>
         &nbsp; &nbsp; <button onClick={()=>markAsDone(id)}>Mark As Done</button>
        </>
    )
}