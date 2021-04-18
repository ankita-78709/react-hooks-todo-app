import React, { useState, useEffect, useRef } from 'react';

const Form = props => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    //setting input refernce for in focus input on Load
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    //Function to handle submitting the form
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    //Function to handle input change
    const handleChange = e => setInput(e.target.value)

    return (
        <form className="form-class" onSubmit={handleSubmit}>
            { //If edit is received in the props,, show the update input
                props.edit ?
                    (
                        <>
                            <input
                                type="text"
                                ref={inputRef}
                                placeholder="Update the todo"
                                className="input-class edit"
                                value={input}
                                name="input-text"
                                onChange={handleChange}
                            />
                            <button className="button-class edit">Edit Item</button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                ref={inputRef}
                                placeholder="Add the todo item"
                                className="input-class add"
                                value={input}
                                name="input-text"
                                onChange={handleChange}
                            />
                            <button className="button-class">Add Item</button>
                        </>
                    )
            }

        </form>
    )
}

export default Form;