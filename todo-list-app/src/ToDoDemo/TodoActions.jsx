export default function TodoActions({deleteAll, markAllAsDone}){
    return (
        <div>
                <button onClick={deleteAll}>Delete All</button>
                &nbsp; &nbsp;
                <button onClick={markAllAsDone}>Mark All as Done</button>
        </div>
    )
}