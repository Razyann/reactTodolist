import './Todo.css'
import TodoHead from "./todo-head/TodoHead";
import TodoBody from "./todo-body/TodoBody";
import {useEffect, useState} from "react";
export let item
export default function Todo(){
    const [todo,setTodo] = useState("")
    const [items,setItems] = useState([])
    function createToDo(){
        if(todo.trim()) {
            setItems((prev) => {

                return [
                    ...prev,
                    {
                        id: prev[prev.length - 1] ? prev[prev.length - 1].id + 1 : 1,
                        title: todo.trim(),
                        completed: false,
                        isEdit: false
                    }
                ]

            })
            setTodo("")
        }

    }
    function doCheck(id){
        setItems((prev) => {
            return prev.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
        })
    }
    function doEdit(id){
        setItems((prev) => {
            return prev.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        isEdit: !item.isEdit
                    }
                }
                return item
            })
        })
    }
    function deleteTodo(id){
        setItems(prev => {
            return prev.filter(item => item.id !==id)
        })
    }
    // useEffect(() => {
    //     console.log(items)
    // },[items] )

    return(
        <div className={'todo_container'}>
            <div className={'todo'}>
                <TodoHead setTodo={setTodo} createToDo={createToDo} todo={todo}/>
                <TodoBody items={items} setItems={setItems} deleteTodo={deleteTodo} doCheck={doCheck} doEdit={doEdit}  createToDo={createToDo} />
            </div>
        </div>
    )
}