import './TodoHead.css'

export default function TodoHead({setTodo, createToDo, todo}){
    return(
        <div className={'todo_head'}>
            <input type={'text'} value={todo} onChange={(e) => {
                setTodo(e.target.value)
            }}></input>
            <button className={'create_btn'} onClick={() =>  {
                createToDo()
            }}>
                CREATE
            </button>
        </div>
    )
}