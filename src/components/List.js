import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

const List = () => {

    const [todoItems, setTodoItem] = useState([]);

    //Function to add items to the todoItems array
    const addItemToList = todo => {
        if (!todo.text || todo.length === 0) {
            return
        }
        //adding the new item to the todoList array
        const newItem = [todo, ...todoItems]
        setTodoItem(newItem)
    }

    //Function to define if Adding is completed
    const isDone = (id) => {
        let newTodos = todoItems.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodoItem(newTodos);
    }

    //deleting item from the Array List
    const removeItemFromList = todo => {
        const filterTodos = [...todoItems].filter(item => item.id !== todo.id)
        setTodoItem(filterTodos)
    }

    //Function to update the changes to the Array List
    const updateTodoList = (todo, newValue) => {
        if (!newValue || newValue.length === 0) {
            return
        }
        setTodoItem(prev => prev.map(item => item.id === todo.id ? newValue : item))
    }

    return (
        <div>
            <h1>What's on your mind? Add them</h1>
            <Form onSubmit={addItemToList} />
            <Todo
                todoItems={todoItems}
                isDone={isDone}
                removeItem={removeItemFromList}
                updateItem={updateTodoList}
            />
        </div>
    )
}
export default List;