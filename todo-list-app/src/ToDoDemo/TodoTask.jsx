export default function TodoTask({isDone,task}){
    return (
        <>
            o&nbsp; &nbsp;<span style={{textDecoration:isDone?"line-through":"none", color:isDone?"red":"yellow"}}>{task}</span>
        </>
    )
}