import React from 'react';

const Todo = props => {

    let todoClassName = "todo";
    if (props.todo.completed) {
        todoClassName = todoClassName + " completed";
    }

    const handleClick = () => {
        props.toggleCompleted(props.todo.id);
    };

    return(
        <div onClick={handleClick} className={todoClassName}>
            <p>{props.todo.name}</p>
        </div>
    );
};

export default Todo;
