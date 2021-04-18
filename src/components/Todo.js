import React, { useState } from 'react';
import Form from './Form';

const Todo = ({ todoItems, isDone, removeItem, updateItem }) => {

    const [editItem, setEditItem] = useState({ id: null, value: '' });

    //Function to update the edited Item in the actual List
    const submitUpdatedList = value => {
        updateItem(editItem, value)
        setEditItem({id: null, value: ''})
    }

    if(editItem.id) {
        return <Form edit={editItem} onSubmit={submitUpdatedList} /> 
    }

    return todoItems.map((todo, index) => (
        <div className={todo.isDone ? "todo isdone" : "todo"} key={index} >
            <div key={todo.id} onClick={() => { isDone(todo.id) }}>
            {todo.text}
            </div>
            <div className="todo-icon">
                <i className="fas fa-times-circle delete-icon" onClick={() => removeItem(todo)}></i>
                <i className="fas fa-edit edit-icon" onClick={() => setEditItem({id: todo.id, value: todo.text})}></i>
            </div>
        </div>
    )
    )
}
export default Todo;