export default function TodoHeading(){
    return (
        <h1>Todo List ({Date().split(" ").slice(1,4).join("-")})</h1>
    )
}