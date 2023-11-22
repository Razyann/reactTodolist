import './TodoBody.css'
import TodoBodyItem from "./todo-body-item/TodoBodyItem";

export default function TodoBody({items,deleteTodo,doCheck, doEdit, setItems,createToDo}){

    return(
        <div className={'todo_body'}>
            {items && items.map((
                {title, id, completed, isEdit}
            ) => {
                    return(
                       <TodoBodyItem key={id} isEdit={isEdit} setItems={setItems} title={title} doEdit={doEdit} deleteTodo={deleteTodo} doCheck={doCheck} id={id} completed={completed}/>
                    )

            })}
        </div>
    )
}