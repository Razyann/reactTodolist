import {useState} from "react";

const TodoBodyItem= ({isEdit, setItems, title, doEdit, deleteTodo, doCheck, id, completed}) => {
    const [editValue, setEditValue] = useState(title);
    return (
        <div className={'todo_item_cont'} >
            <div className={'todo_item_text_box'}>
                {isEdit ? <input type='text' value={editValue} onChange={(e) => {
                    setEditValue(e.target.value)
                }}/> : title}
            </div>
            <div className={'todo_item_edit_btn_box'} >
                <div className={'edit_btn'}  style={isEdit?{ backgroundColor:'purple' }:{}} onClick={() => {
                    doEdit(id)
                    if(isEdit && editValue.trim()) {
                        setItems((prev) => {
                            return prev.map((item) => {
                                if(item.id === id) {
                                    return {
                                        ...item,
                                        title: editValue
                                    }
                                }
                                return item
                            })
                        })
                    }
                    // createToDo()
                }}></div>
            </div>
            <div className={'todo_item_delete_btn_box'}>
                <div className={'delete_btn'} onClick={(e) => {
                    deleteTodo(id)
                }}></div>
            </div>
            <div className={'checked_box'} onClick={() => {
                doCheck(id)
            }}>
                <div className={'check_btn'}>
                    <p>
                        {completed ?
                            <style>
                                <style>
                                    {"\
                                    .todo_item_text_box{\
                                    text-decoration: line-through;\
                                    color: gray;\
                                   }\
                               "}
                                </style>
                                <style>
                                    {"\
                                    .todo_item_cont{\
                                    opacity: 0.6;\
                                   }\
                               "}
                                </style>
                            </style>: 'done'}
                    </p>
                </div>
            </div>
        </div>
    )

}
export default TodoBodyItem;